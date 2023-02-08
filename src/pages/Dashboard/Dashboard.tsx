import React, { useMemo, useState } from "react";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/Select";
import * as C from "./styles";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import listOfMonths from "../Listas/Months";
import { WalletBox } from "../../components/WalletBox/WalletBox";
import { MessageBox } from "../../components/WalletBox/MessageBox/MesageBox";
import happyImg from "../../icons/happy.svg";
import sadImg from "../../icons/sad.svg";
import { PizzaGraf } from "../../components/Graphics/PieChart/PieChart";
import { HistoryBox } from "../../components/Graphics/HistoryBox/HistoryBox";
import { BarChartG } from "../../components/Graphics/BarChart/BarChartG";

export const Dashboard: React.FC = () => {
  const options = [
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];

  const [monthSelected, setMonth] = useState<string>(String(1));
  const [yearSelected, setYear] = useState<string>(String(2020));

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1);

      if (month === monthSelected && year === yearSelected) {
        total += Number(item.amount);
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1);

      if (month === monthSelected && year === yearSelected) {
        total += Number(item.amount);
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalExpenses, totalGains]);

  const Message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footerText:
          "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
        icon: sadImg,
      };
    } else if (totalBalance === 0) {
      return {
        title: "Ufaaa!",
        description: "Neste mês, você gastou exatamente o que ganhou.",
        footerText: "Tente poupar o seu dinheiro no próximo mês.",
        icon: happyImg,
      };
    } else {
      return {
        title: "Muito bem!",
        description: "Sua carteira está positiva.",
        footerText: "Continue assim. Considere investir.",
        icon: happyImg,
      };
    }
  }, [totalBalance]);

  const Relation = useMemo(() => {
    const total = totalGains + totalExpenses;
    const percentGains = (totalGains / total) * 100;
    const percentExpenses = (totalExpenses / total) * 100;

    const data = [
      {
        name: "Entradas",
        value: Number(totalGains),
        percent: Number(percentGains.toFixed(1))
          ? Number(percentGains.toFixed(1))
          : 0,
        color: "#e2595c",
      },
      {
        name: "Saídas",
        value: Number(totalExpenses),
        percent: Number(percentExpenses.toFixed(1))
          ? Number(percentExpenses.toFixed(1))
          : 0,
        color: "#e19a3b",
      },
    ];

    return data;
  }, [totalExpenses, totalGains]);

  const historyData = useMemo(() => {
    return listOfMonths
      .map((_, month) => {
        let amountInput = 0;
        gains.forEach((gain) => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = String(date.getFullYear());

          if (gainMonth === month && gainYear === yearSelected) {
            amountInput += Number(gain.amount);
          }
        });

        let amountOutput = 0;
        expenses.forEach((expense) => {
          const date = new Date(expense.date);
          const expenseMonth = date.getMonth();
          const expenseYear = String(date.getFullYear());

          if (expenseMonth === month && expenseYear === yearSelected) {
            amountOutput += Number(expense.amount);
          }
        });

        return {
          monthNumber: month,
          month: listOfMonths[month].substr(0, 3),
          amountOutput,
          amountInput,
        };
      })

      .filter((item) => {
        const currentMonth = new Date().getMonth();
        const currentYear = String(new Date().getFullYear());
        return (
          (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
          yearSelected < currentYear
        );
      });
  }, [yearSelected]);

  const relation = useMemo(() => {
    let amountRecurrent = 0;
    let amounEventual = 0;

    expenses
      .filter((expense) => {
        const date = new Date(expense.date);
        const year = String(date.getFullYear());
        const month = String(date.getMonth() + 1);

        return month === monthSelected && year === yearSelected;
      })

      .forEach((expense) => {
        if (expense.frequency === "recorrente") {
          return (amountRecurrent += Number(expense.amount));
        }
        if (expense.frequency === "eventual") {
          return (amounEventual += Number(expense.amount));
        }
      });

    const total = amountRecurrent + amounEventual;

    const percentRecurrent = Number(
      ((amountRecurrent / total) * 100).toFixed(1)
    );

    const percentEventual = Number(((amounEventual / total) * 100).toFixed(1));

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        percent: percentRecurrent ? percentRecurrent : 0,
        color: "#e19a3b",
      },
      {
        name: "Eventual",
        amount: amounEventual,
        percent: percentEventual ? percentEventual : 0,
        color: "#e2595c",
      },
    ];
  }, [monthSelected, yearSelected]);

  const relationGains = useMemo(() => {
    let amountRecurrent = 0;
    let amounEventual = 0;

    gains
      .filter((gain) => {
        const date = new Date(gain.date);
        const year = String(date.getFullYear());
        const month = String(date.getMonth() + 1);

        return month === monthSelected && year === yearSelected;
      })

      .forEach((gain) => {
        if (gain.frequency === "recorrente") {
          return (amountRecurrent += Number(gain.amount));
        }
        if (gain.frequency === "eventual") {
          return (amounEventual += Number(gain.amount));
        }
      });

    const total = amountRecurrent + amounEventual;

    const percentRecurrent = Number(
      ((amountRecurrent / total) * 100).toFixed(1)
    );

    const percentEventual = Number(((amounEventual / total) * 100).toFixed(1));

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        percent: percentRecurrent ? percentRecurrent : 0,
        color: "#e19a3b",
      },
      {
        name: "Eventual",
        amount: amounEventual,
        percent: percentEventual ? percentEventual : 0,
        color: "#e2595c",
      },
    ];
  }, [monthSelected, yearSelected]);

  return (
    <C.Container>
      <ContentHeader title="Dashboard" lineColor="#e19a3b">
        <SelectInput
          options={months}
          onChange={(e) => setMonth(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYear(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <C.Content>
        <WalletBox
          title={"saldo"}
          amount={totalBalance}
          footerlabel={"atualizado com base nas entradas e saídas"}
          icon={"dollarImg"}
          color={"#5d62ae"}
        />

        <WalletBox
          title={"entradas"}
          amount={totalGains}
          footerlabel={"atualizado com base nas entradas e saídas"}
          icon={"arrowUpImg"}
          color={"#5d62ae"}
        />

        <WalletBox
          title={"saídas"}
          amount={totalExpenses}
          footerlabel={"atualizado com base nas entradas e saídas"}
          icon={"arrowDownImg"}
          color={"#5d62ae"}
        />

        <MessageBox
          title={Message.title}
          description={Message.description}
          footerText={Message.footerText}
          icon={Message.icon}
        />

        <PizzaGraf data={Relation} />

        <HistoryBox
          data={historyData}
          lineColorAmountInput={"#e19a3b"}
          lineColorAmountOutput={"#e19a3b"}
        />

        <BarChartG title="Saídas" data={relation} />

        <BarChartG title="Entradas" data={relationGains} />
      </C.Content>
    </C.Container>
  );
};
