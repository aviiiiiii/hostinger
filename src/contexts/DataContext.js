import { createContext, useEffect, useState } from "react";
import React from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tollList, settollList] = useState([]);
  const [vehicleList, setVehicleList] = useState([]);

  const serverURL = "https://real-gold-katydid-tam.cyclic.app";
  // const serverURL="http://localhost:5000";
  let newEntry;

  useEffect(() => {
    fetchVehicleList();
    fetchTollList();

    ///////////////////////////////////////////
    let formattedMonth;
    let formattedMonth1;
    formattedMonth = Number(currentMonth) + 1;
    formattedMonth = String(formattedMonth);
    if (formattedMonth.length === 1) formattedMonth = "0" + formattedMonth;
    formattedMonth1 = currentYear + "-" + formattedMonth;
    fetchTransactions();
    setYear(currentYear);
    setMonth(formattedMonth1);
    fetchYearlyIncome(currentYear);
    fetchYearlyExpense(currentYear);
    fetchMonthlyIncome(formattedMonth1);
    fetchMonthlyExpense(formattedMonth1);
    ////////////////////////////////////////
  }, []);

  //////////////////////////////////////////////////////////////////////////////
  const date = new Date();
  const currentYear = new String(date.getFullYear());
  const currentMonth = new String(date.getMonth());

  const [year, setYear] = useState("0");
  const [yearIncome, setYearIncome] = useState("0");
  const [yearExpense, setYearExpense] = useState("0");

  const [month, setMonth] = useState("0");
  const [monthIncome, setMonthIncome] = useState("0");
  const [monthExpense, setMonthExpense] = useState("0");

  const [amount, setAmount] = useState(0);
  const [user, setUser] = useState("");
  const [type, setType] = useState("Income");
  const [description, setDescription] = useState("");

  const [transactions, setTransactions] = useState([]);

  const fetchTransactionsWithFilter = async (filter) => {
    if (filter.user === "") filter.user = "null";
    if (filter.type === "") filter.type = "null";
    if (filter.dateFrom === "") filter.dateFrom = "null";
    if (filter.dateTo === "") filter.dateTo = "null";
    const response = await fetch(
      `/getTransactionsWithFilter/${filter.user}/${filter.type}/${filter.dateFrom}/${filter.dateTo}`
    );
    const data = await response.json();
    console.log(data);
    setTransactions(data);
  };

  const fetchTransactions = async () => {
    const response = await fetch("/getTransactions");
    const data = await response.json();
    console.log(data);
    setTransactions(data);
  };

  const fetchYearlyIncome = async (sentYear) => {
    console.log(sentYear);
    const response = await fetch(`/getYearlyIncome/${sentYear}`);
    const data = await response.json();
    setYearIncome(data.yearlyIncome);
  };

  const fetchYearlyExpense = async (sentYear) => {
    console.log(sentYear);
    const response = await fetch(`/getYearlyExpense/${sentYear}`);
    const data = await response.json();
    setYearExpense(data.yearlyExpense);
  };

  const fetchMonthlyIncome = async (sentMonth) => {
    console.log(sentMonth);
    const response = await fetch(`/getMonthlyIncome/${sentMonth}`);
    const data = await response.json();
    setMonthIncome(data.monthlyIncome);
  };

  const fetchMonthlyExpense = async (sentMonth) => {
    console.log(sentMonth);
    const response = await fetch(`/getMonthlyExpense/${sentMonth}`);
    const data = await response.json();
    setMonthExpense(data.monthlyExpense);
  };

  const funcAddTransaction = async (data) => {
    const response = await fetch("/postTransaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const funcDeleteTransaction = async (id) => {
    await fetch(`/  eleteTransaction/${id}`, { method: "DELETE" });
  };

  const updateYear = (event) => {
    event.preventDefault();
    // console.log(event);
    if (event.target[0].value === "") return;
    setYear(event.target[0].value);
    console.log("year is %d", event.target[0].value);
    fetchYearlyIncome(event.target[0].value);
    fetchYearlyExpense(event.target[0].value);
  };

  const updateMonth = (event) => {
    event.preventDefault();
    if (event.target[0].value === "") return;
    setMonth(event.target[0].value);
    console.log("month is %s", event.target[0].value);
    fetchMonthlyIncome(event.target[0].value);
    fetchMonthlyExpense(event.target[0].value);
  };

  const addTransaction = (event) => {
    event.preventDefault();
    if (
      event.target[0].value === "" ||
      event.target[1].value === "" ||
      event.target[2].value === "" ||
      event.target[3].value === "" ||
      event.target[4].value === ""
    ) {
      window.alert("Please enter details for adding transaction");
      return;
    }
    const newTransaction = {
      user: event.target[0].value,
      type: event.target[2].value,
      amount: event.target[1].value,
      date: event.target[3].value,
      description: event.target[4].value,
    };

    console.log(newTransaction);
    funcAddTransaction(newTransaction);
    fetchTransactions();
    event.target.reset();
  };

  const filterSubmit = (event) => {
    event.preventDefault();
    if (event.nativeEvent.submitter.name === "filterSearch") {
      const filterDetails = {
        user: event.target[0].value,
        type: event.target[1].value,
        dateFrom: event.target[2].value,
        dateTo: event.target[3].value,
      };
      console.log(filterDetails);
      fetchTransactionsWithFilter(filterDetails);
    } else {
      fetchTransactions();
      event.target.reset();
    }
  };

  const deleteOneTransaction = async (event) => {
    event.preventDefault();
    console.log(event.nativeEvent.submitter.name);
    funcDeleteTransaction(event.nativeEvent.submitter.name);
    fetchTransactions();
    fetchYearlyIncome(year);
    fetchYearlyExpense(year);
    fetchMonthlyIncome(month);
    fetchMonthlyExpense(month);
  };

  ///////////////////////////////////////////////////////////////////////////////

  const fetchVehicleList = async () => {
    const response = await fetch(serverURL + "/getVehicleList");
    const data = await response.json();
    // console.log(data);
    setVehicleList(data);
  };

  const fetchTollList = async () => {
    const response = await fetch(serverURL + "/getTollList");
    const data = await response.json();
    // console.log(data);
    settollList(data);
  };

  const fetchVehicleListWithfilter = async (value) => {
    const response = await fetch(
      serverURL + `/getVehicleListWithfilter/${value}`
    );
    const data = await response.json();
    // console.log(data);
    if (data.length === 0) alert("No Vehicle for this filter");
    setVehicleList(data);
  };

  const fetchTollListWithFilter = async (value) => {
    const response = await fetch(serverURL + `/getTollListWithfilter/${value}`);
    const data = await response.json();
    // console.log(data);
    if (data.length === 0) alert("No Toll for this filter");
    settollList(data);
  };

  const fetchVehicleListWithfilter2 = async (value) => {
    const response = await fetch(
      serverURL + `/getVehicleListWithfilter2/${value}`
    );
    const data = await response.json();
    // console.log(data);
    if (data.length === 0) alert("No Vehicle for this filter");
    setVehicleList(data);
  };

  const btnAddVehicle = () => {
    document.getElementById("vehicleForm").style.display = "block";
  };
  const btnAddToll = () => {
    document.getElementById("tollForm").style.display = "block";
  };
  const btnViewToll = () => {
    // console.log("3");
  };
  const btnAddVehicleClose = () => {
    document.getElementById("vehicleForm").style.display = "none";
  };

  const btnAddTollClose = () => {
    document.getElementById("tollForm").style.display = "none";
  };

  const addTollSubmit = (event) => {
    event.preventDefault();
    let array = [
      event.target[1].value,
      event.target[4].value,
      event.target[7].value,
      event.target[10].value,
    ];
    let valid = ["Car/Jeep/Van", "LCV", "Truck/Bus", "Heavy Vehicle"];

    let invalid = 0;
    valid.forEach((ele) => {
      if (array.includes(ele) === false) {
        invalid = 1;
      }
    });

    if (invalid === 1) {
      alert("Please select all vehicle types");
      return;
    }

    let carSingle,
      carReturn,
      lcvSingle,
      lcvReturn,
      truckSingle,
      truckReturn,
      heavySingle,
      heavyReturn;
    for (let i = 1; i <= 10; i += 3) {
      if (event.target[i].value === "LCV") {
        lcvSingle = event.target[i + 1].value;
        lcvReturn = event.target[i + 2].value;
      } else if (event.target[i].value === "Car/Jeep/Van") {
        carSingle = event.target[i + 1].value;
        carReturn = event.target[i + 2].value;
      } else if (event.target[i].value === "Truck/Bus") {
        truckSingle = event.target[i + 1].value;
        truckReturn = event.target[i + 2].value;
      } else if (event.target[i].value === "Heavy Vehicle") {
        heavySingle = event.target[i + 1].value;
        heavyReturn = event.target[i + 2].value;
      }
    }

    const addTollJSON = {
      name: event.target[0].value,
      carSingle: carSingle,
      carReturn: carReturn,
      lcvSingle: lcvSingle,
      lcvReturn: lcvReturn,
      truckSingle: truckSingle,
      truckReturn: truckReturn,
      heavySingle: heavySingle,
      heavyReturn: heavyReturn,
    };
    // console.log(event);
    // console.log(addTollJSON);
    postToll(addTollJSON);
    document.getElementById("tollForm").style.display = "none";
    alert("Toll added");
    fetchTollList();
    document.getElementById("formToll").reset();
  };

  const calculateTariff = () => {
    let vehicleType = document.getElementById("vehicleType").value;
    let tollName = document.getElementById("tollName").value;
    let dateTime = new Date().toLocaleString();
    let vehicleNumber = document.getElementById("vehicleNumber").value;
    let dateFormated = Date.now() / 1000;
    let tariff = "";
    // console.log(vehicleList);
    let vehiclefound = 0;
    vehicleList.forEach((a) => {
      if (a.number === vehicleNumber) {
        if (
          parseInt(dateFormated) - parseInt(a.dateFormated) <= 3600 &&
          a.toll === tollName
        ) {
          vehiclefound = 1;
          console.log("vehicle Found");
          tollList.forEach((toll) => {
            if (toll.name === tollName) {
              if (vehicleType === "Car/Jeep/Van") {
                tariff = toll.carReturn;
              } else if (vehicleType === "LCV") {
                tariff = toll.lcvReturn;
              } else if (vehicleType === "Truck/Bus") {
                tariff = toll.truckReturn;
              } else {
                tariff = toll.heavyReturn;
              }
            }
          });
        }
      }
    });
    if (vehiclefound === 0) {
      tollList.forEach((toll) => {
        if (toll.name === tollName) {
          if (vehicleType === "Car/Jeep/Van") {
            tariff = toll.carSingle;
          } else if (vehicleType === "LCV") {
            tariff = toll.lcvSingle;
          } else if (vehicleType === "Truck/Bus") {
            tariff = toll.truckSingle;
          } else {
            tariff = toll.heavySingle;
          }
        }
      });
    }

    if (tariff !== "") {
      console.log("updating");
      document.getElementById("Tariff").value = tariff;
    }

    newEntry = {
      type: vehicleType,
      number: vehicleNumber,
      date: dateTime,
      toll: tollName,
      tariff: tariff,
      dateFormated: dateFormated,
    };
    // console.log(newEntry);
  };

  const postVehicle = async (newEntry) => {
    await fetch(serverURL + "/postVehicle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });
  };

  const postToll = async (newEntry) => {
    await fetch(serverURL + "/postToll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });
  };

  const deleteSelectedToll = async (delVal) => {
    await fetch(serverURL + `/deleteToll/${delVal}`, { method: "DELETE" });
  };

  const addVehicleSubmit = (event) => {
    event.preventDefault();

    document.getElementById("vehicleForm").style.display = "none";
    postVehicle(newEntry);
    alert("Vehicle added");
    document.getElementById("formVehicle").reset();
    // console.log(newEntry);
    fetchVehicleList();
  };

  const filterWithVehicleName = () => {
    let value = document.getElementById("searchValue").value;
    if (value === "") fetchVehicleList();
    else fetchVehicleListWithfilter(value);
  };

  const filterWithTollName = () => {
    let value = document.getElementById("searchToll").value;
    if (value === "") fetchTollList();
    else fetchTollListWithFilter(value);
  };

  const clickFilter = (event) => {
    const vehicleType = event.target.id;
    document.getElementById("dropdown_id").style.display = "none";

    if (vehicleType === "All") {
      fetchVehicleList();
      document.getElementById("filterBlockButton").style.backgroundColor =
        "#215bed";
    } else {
      fetchVehicleListWithfilter2(vehicleType);
      document.getElementById("filterBlockButton").style.backgroundColor =
        "grey";
    }
  };

  const deleteToll = () => {
    const deleteVal = document.getElementById("deleteSelect").value;
    // console.log(deleteVal);
    deleteSelectedToll(deleteVal);
    alert("toll deleted");
    fetchTollList();
  };

  return (
    <DataContext.Provider
      value={{
        btnAddVehicle,
        btnAddToll,
        btnViewToll,
        btnAddVehicleClose,
        btnAddTollClose,
        tollList,
        settollList,
        vehicleList,
        setVehicleList,
        addTollSubmit,
        calculateTariff,
        addVehicleSubmit,
        filterWithVehicleName,
        clickFilter,
        filterWithTollName,
        deleteToll,

        year: year,
        month: month,
        yearIncome: yearIncome,
        yearExpense: yearExpense,
        monthIncome: monthIncome,
        monthExpense: monthExpense,
        amount: amount,
        user: user,
        description: description,
        type: type,
        transactions: transactions,
        addTransaction: addTransaction,
        updateMonth: updateMonth,
        updateYear: updateYear,
        filterSubmit: filterSubmit,
        deleteOneTransaction: deleteOneTransaction,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
