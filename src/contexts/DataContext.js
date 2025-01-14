import { createContext, useEffect, useState } from "react";
import React from "react";
import AwsS3TextFile from "../pages/AwsS3TextFile";
import { FaAngleDoubleRight, FaArrowCircleRight } from "react-icons/fa";
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

import axios from 'axios';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tollList, settollList] = useState([]);
  const [vehicleList, setVehicleList] = useState([]);
  

  // const serverURL = "https://real-gold-katydid-tam.cyclic.app";
  // const serverURL = "https://cyclic-ycjj.onrender.com";
  // const serverURL = "http://localhost:5000";
  const serverURL = "https://cyclic-io8q.onrender.com";
  let newEntry;

  ///////////////////////////////////////////////////////////

  const [imageURL, setImageURL] = useState(
    "https://t3.ftcdn.net/jpg/00/28/08/40/240_F_28084010_bGRJetPfBwNcO3YuRC2C3Pz7qASocWQ4.jpg"
  );

  const [countries, setCountries] = useState([]);
  const [apiAsyncResponse, setApiAsyncResponse] = useState("Not Received");
  const [apiSyncResponse, setApiSyncResponse] = useState("Not received");

  const [processApiResponse, setProcessApiResponse] = useState("Not received");
  const [checkStatusResponse, setCheckStatusResponse] =
    useState("Not received");

  const [systemValue, setSystemValue] = useState("white");
  const [userValue, setUserValue] = useState("white");
  const [spsResult, setSpsResult] = useState("white");

  const [userHcValue, SetUserHcValue] = useState("Null");
  const [systemHcValue, setSystemHcValue] = useState("Null");
  const [hcScore, setHcScore] = useState(0);




  //////////////////////////////////////////////////

  useEffect(() => {
    fetchVehicleList();
    fetchTollList();
    // getTasks();
    fetchEvents();
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
    // searchImage();
    setImageURL(imageURL);
    setApiAsyncResponse(apiAsyncResponse);
    setApiSyncResponse(apiSyncResponse);
    setSystemValue(systemValue);
    setUserValue(userValue);

  }, []);

  ////////////////////////////////////////////////////
  const [tasks, setTasks] = useState([]);

  const [events, setEvents] = useState([]);
  

  const [attendees, setAttendees] = useState([]);
  
  const [feedbacks, setFeedbacks] = useState([]);
  
  const [registerEventId, setRegisterEventId] = useState("");

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
      serverURL +
        `/getTransactionsWithFilter/${filter.user}/${filter.type}/${filter.dateFrom}/${filter.dateTo}`
    );
    const data = await response.json();
    console.log(data);
    setTransactions(data);
  };

  const fetchTransactions = async () => {
    const response = await fetch(serverURL + "/getTransactions");
    const data = await response.json();
    console.log(data);
    setTransactions(data);
  };

  const fetchYearlyIncome = async (sentYear) => {
    console.log(sentYear);
    const response = await fetch(serverURL + `/getYearlyIncome/${sentYear}`);
    const data = await response.json();
    setYearIncome(data.yearlyIncome);
  };

  const fetchYearlyExpense = async (sentYear) => {
    console.log(sentYear);
    const response = await fetch(serverURL + `/getYearlyExpense/${sentYear}`);
    const data = await response.json();
    setYearExpense(data.yearlyExpense);
  };

  const fetchMonthlyIncome = async (sentMonth) => {
    console.log(sentMonth);
    const response = await fetch(serverURL + `/getMonthlyIncome/${sentMonth}`);
    const data = await response.json();
    setMonthIncome(data.monthlyIncome);
  };

  const fetchMonthlyExpense = async (sentMonth) => {
    console.log(sentMonth);
    const response = await fetch(serverURL + `/getMonthlyExpense/${sentMonth}`);
    const data = await response.json();
    setMonthExpense(data.monthlyExpense);
  };

  const funcAddTransaction = async (data) => {
    const response = await fetch(serverURL + "/postTransaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const funcDeleteTransaction = async (id) => {
    await fetch(serverURL + `/deleteTransaction/${id}`, { method: "DELETE" });
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

  //////////////////////////////////////////////////////////////////////////////////////
  const searchImage = async () => {
    // let number = Math.floor(Math.random() * 10);
    // let a = [
    //   "https://t3.ftcdn.net/jpg/00/28/08/40/240_F_28084010_bGRJetPfBwNcO3YuRC2C3Pz7qASocWQ4.jpg",
    //   "https://t4.ftcdn.net/jpg/01/35/97/83/240_F_135978399_qplk3WPu7JOA63JPCYVy1fb7MI4nefAL.jpg",
    //   "https://t3.ftcdn.net/jpg/00/51/69/94/240_F_51699465_hvdWz7J0kRDWfFwDSNKA5bsXiVTXi8rG.jpg",
    //   "https://t3.ftcdn.net/jpg/00/51/69/94/240_F_51699465_hvdWz7J0kRDWfFwDSNKA5bsXiVTXi8rG.jpg",
    //   "https://t3.ftcdn.net/jpg/05/59/74/86/240_F_559748686_cDNuhLxMJHq4oXQVKaRvc7w9fQnQV25Q.jpg",
    //   "https://t3.ftcdn.net/jpg/05/59/74/86/240_F_559748686_cDNuhLxMJHq4oXQVKaRvc7w9fQnQV25Q.jpg",
    //   "https://t3.ftcdn.net/jpg/05/59/74/86/240_F_559748686_cDNuhLxMJHq4oXQVKaRvc7w9fQnQV25Q.jpg",
    //   "https://t3.ftcdn.net/jpg/03/85/16/06/240_F_385160616_YWFD9YBy1sDGbpQIgWUkw3o7c4jp1E7Q.jpg",
    //   "https://t3.ftcdn.net/jpg/03/85/16/06/240_F_385160616_YWFD9YBy1sDGbpQIgWUkw3o7c4jp1E7Q.jpg",
    //   "https://t3.ftcdn.net/jpg/01/74/37/34/240_F_174373464_PekSqb8rgCGQsxbPoezBM3Ecir8fdBAs.jpg",
    // ];
    // setImageURL(a[number]);
    // "https://kind-bear-school-uniform.cyclic.app//https://zaq7cz8wjd.execute-api.ap-south-1.amazonaws.com/new",

    const response = await fetch(
      "https://0e4w64s0ff.execute-api.ap-south-1.amazonaws.com/new",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.body);
        setImageURL(data.body);
      });
    // console.log(response);
    // setImageURL(response);
    // const data = await response.json();
    // console.log("data : " + data);
    // console.log("response : " + response.body);
  };

  // const getTextFile = async () => {
  //   const response = await fetch(
  //     "https://sample-storage-avi.s3.ap-south-1.amazonaws.com/List+of+countries.txt"
  //   )
  //     .then((response) => console.log(response))
  //     .then((data) => {
  //       console.log(data);
  //       setImageURL(data);
  //     });
  // };

  const getTextFile = async () => {
    const response = await fetch(
      "https://sample-storage-aviii.s3.ap-south-1.amazonaws.com/List_of_countries.txt"
    );

    const data = await response.text();
    let countryList = data.split("\r\n");
    console.log(countryList);
    setCountries(countryList);
  };

  const addCountry = async () => {
    let newCountry = document.getElementById("countryInput").value;

    if (newCountry.trim() == "") {
      alert("Empty");
      return;
    }
    // let oldurl = "https://sample-storage-avi.s3.ap-south-1.amazonaws.com/List_of_countries.txt";
    const response = await fetch(
      "https://sample-storage-aviii.s3.ap-south-1.amazonaws.com/List_of_countries.txt"
    );
    let data = await response.text();
    console.log(data);
    data = data + "\r\n" + newCountry;
    alert(data);

    putData(data);
    getTextFile();
  };

  // let oldUrl = "https://zaq7cz8wjd.execute-api.ap-south-1.amazonaws.com/new/sample-storage-avi/List_of_countries.txt";
  const putData = async (country) => {
    await fetch(
      "https://0e4w64s0ff.execute-api.ap-south-1.amazonaws.com/new/sample-storage-aviii/List_of_countries.txt",
      {
        method: "PUT",
        headers: {
          "Content-Type": "text/plain",
        },
        body: country,
      }
    )
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const deleteCountry = async () => {
    let delCountry = document.getElementById("countryInputDelete").value;
    if (delCountry.trim() == "") {
      alert("Empty");
      return;
    }
    if (!countries.includes(delCountry)) {
      alert("not present");
      return;
    }

    let updatedCountries = countries.filter((item) => {
      return item != delCountry;
    });
    updatedCountries = updatedCountries.toString();
    let updatedCountries2 = updatedCountries.replaceAll(",", "\r\n");
    putData(updatedCountries2);
    getTextFile();
  };

  //////////////////////////////////////////////////////////////////////////////////////

  const sendApiRequest = async () => {
    let apiInputText = document.getElementById("apiInputText").value;

    if (apiInputText.length == 0) {
      alert("Name cant be empty");
      return;
    }

    let response = await fetch(serverURL + "/apiSendRequest/" + apiInputText);
    let statusCode = await response.status;
    setApiSyncResponse(statusCode);
  };

  const processApiRequest = async () => {
    let processName = document.getElementById("processName").value;
    let processId = document.getElementById("processId").value;

    if (processName.length == 0 || processId.length == 0) {
      alert("Name/Id cant be empty");
      return;
    }

    let response = await fetch(
      serverURL + "/processApiRequest/" + processName + "/" + processId
    );
    let data = await response.text();
    // alert(data);
    setProcessApiResponse(data);
    setApiAsyncResponse(data);
  };

  const checkStatus = async () => {
    let processName = document.getElementById("checkStatusInput").value;
    if (processName.length == 0) {
      alert("Name cant be empty");
      return;
    }
    let response = await fetch(serverURL + "/checkprocessSatus/" + processName);
    let data = await response.text();
    // alert(data);
    setCheckStatusResponse(data);
  };

  const performSps = () => {
    let randInt = Math.floor(Math.random() * 3);
    let options = ["Stone", "Paper", "Scissor"];
    let radios = document.getElementsByName("spsInput");
    let userInput = "",
      systemInput;
    for (let radio of radios) {
      if (radio.checked) {
        userInput = radio.value;
        systemInput = options[randInt];
        break;
      }
    }
    if (userInput == "") {
      alert("Select an input");
      return;
    }
    let spsResult2;
    if (userInput == systemInput) {
      spsResult2 = "No result";
    } else {
      if (
        (userInput == "Stone" && systemInput == "Scissor") ||
        (userInput == "Paper" && systemInput == "Stone") ||
        (userInput == "Scissor" && systemInput == "Paper")
      ) {
        spsResult2 = "User Wins";
      } else {
        spsResult2 = "System Wins";
      }
    }

    setUserValue(userInput);
    setSystemValue(systemInput);
    setSpsResult(spsResult2);
  };

  const peformHc = () => {
    let userHcInput = document.getElementById("hcInput").value;
    if (userHcInput < 0 || userHcInput > 6 || userHcInput == "") {
      alert("enter between 0 and 6");
      return;
    }
    let randInt = Math.floor(Math.random() * 7);
    SetUserHcValue(userHcInput);
    setSystemHcValue(randInt);
    if (userHcInput == randInt) {
      alert("OUT!!!!  Total is " + hcScore);
      SetUserHcValue("null");
      setSystemHcValue("null");
      setHcScore(0);
      return;
    }
    setHcScore(hcScore + parseInt(userHcInput));
  };

  const clickingRadioOne = () =>{
    let isOneSelected = document.getElementById("slidingRadio1").checked
    let isTwoSelected = document.getElementById("slidingRadio2").checked
    let isThreeSelected = document.getElementById("slidingRadio3").checked
    if(isOneSelected){
      if (isTwoSelected && isThreeSelected){
          document.getElementById("slidingRadio2").checked = false
      }
    }
  }
  const clickingRadioTwo = () =>{
    let isOneSelected = document.getElementById("slidingRadio1").checked
    let isTwoSelected = document.getElementById("slidingRadio2").checked
    let isThreeSelected = document.getElementById("slidingRadio3").checked
    if(isTwoSelected){
      if (isTwoSelected && isOneSelected){
          document.getElementById("slidingRadio3").checked = false
      }
    }
  }

  const clickingRadioThree = () =>{
    let isOneSelected = document.getElementById("slidingRadio1").checked
    let isTwoSelected = document.getElementById("slidingRadio2").checked
    let isThreeSelected = document.getElementById("slidingRadio3").checked
    if(isThreeSelected){
      if (isTwoSelected && isOneSelected){
          document.getElementById("slidingRadio1").checked = false
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////

  const Task_API_URL = 'https://wurnvxsm0i.execute-api.us-east-1.amazonaws.com/First';

  const addNewTask = async (event)=>{
    event.preventDefault();
    const newTask = {
      taskId: event.target[0].value,
      taskName: event.target[1].value,
      assignee: event.target[2].value,
      taskStatus: event.target[3].value 
    };
    await axios.post(Task_API_URL +'/task', newTask).then(response => {
      if(response.data.statusCode == 200){
        alert("updated successfully")
        event.target.reset();
        setTimeout(() => {
          console.log("Waiting for db to get updated")
        }, 2000);
        getTasks();
      }
      else{
        alert(response.data.body);
      }
    })
    .catch(error => {
      alert(error)
    });
  }

  const updateTask =async (event)=>{
    event.preventDefault();
    let taskId =  event.target[0].value
    const updateTask = {
      assignee: event.target[1].value,
      taskStatus: event.target[2].value
    };
    await axios.put(Task_API_URL +'/task/'+taskId, updateTask).then(response =>{
      if(response.data.statusCode == 200){
        alert("updated successfully")
        event.target.reset();
        getTasks();
      }
      else{
        alert(response.data.body);
      }
    })
    .catch(error => {
      alert(error)
    });
  }

  const filterTasks = (event) => {
    try{
    event.preventDefault();
    }catch{
      //pass
    }
    if (event.nativeEvent.submitter.name === "filter") {
      const filterDetails = {
        taskId: event.target[0].value,
        taskName: event.target[1].value,
        assignee: event.target[2].value,
        taskStatus: event.target[3].value 
      };
      fetchTransactionsWithFilter(filterDetails);
    } else {
      console.log(event.target);
      event.target.reset();
      getTasks();
    }
  };

  const getTasks = async (event) =>{
    console.log("Get Tasks");
    try{
      event.preventDefault();
      }catch{
        //pass
      }
    const response = await axios.get(Task_API_URL +'/tasks');
    let body = JSON.parse(response.data.body);
    setTasks(body);
  }

  
  const deleteTask =async (event)=>{
    event.preventDefault();
    let taskId =  event.nativeEvent.submitter.name
    await axios.delete(Task_API_URL +'/task/'+taskId).then(response =>{
      if(response.data.statusCode == 200){
        alert("deleted successfully")
        getTasks();
        event.target.reset();
      }
      else{
        alert(response.data.body);
      }
    })
    .catch(error => {
      alert(error)
    });
  }

  //////////////////////////////////////////////////////////////////////////////////////

  const togglePopup = (event) =>{
    console.log("Hi");
    document.getElementById("popupOverlay").classList.toggle('show'); 
    
    let eventId = event.nativeEvent.target.name;
    // console.log(event);
    // console.log(eventId);
    setRegisterEventId(eventId);
    
  }

  const showLogin = () =>{
    document.getElementById("AdminLogin").style.display = 'block'; 
    document.getElementById("AdminContent").style.display = 'none';
  }
  const showContent = () =>{
    document.getElementById("AdminContent").style.display = 'block'; 
    document.getElementById("AdminLogin").style.display = 'none';
  }

  const adminLogin = (event) =>{
    event.preventDefault();
    start_loadingPage("adminPageLoading");
    let username = event.target[0].value;
    let password = event.target[1].value;
    const authenticationData = {
       Username: username,
       Password: password,
     };
     const poolData = {
       UserPoolId: 'us-east-1_yy5KLO6i4', // Replace with your User Pool ID
       ClientId: '4rar1ekgmm5dvu2smjn53t7ta3'  // Replace with your App Client ID
     };
     const userPool = new CognitoUserPool(poolData);
     const userData = {
       Username: username,
       Pool: userPool,
     };
     const authenticationDetails = new AuthenticationDetails(authenticationData);
     const cognitoUser = new CognitoUser(userData);
  
     cognitoUser.authenticateUser(authenticationDetails, {
       onSuccess: (result) => {
         // Store the token for API requests
         const idToken = result.getIdToken().getJwtToken();
         localStorage.setItem('adminToken', idToken);
        stop_loadingPage("adminPageLoading");
         // Show the Admin Dashboard
         document.getElementById("AdminLogin").style.display = 'none';
       document.getElementById("AdminContent").style.display = 'block'; 
       },
       onFailure: (err) => {
         stop_loadingPage("adminPageLoading");
         alert('Login failed: ' + err.message || JSON.stringify(err));
       },
     });
   };
  
    
   // if (username == 'admin' && password == 'adminpw'){
      //document.getElementById("AdminLogin").style.display = 'none';
      //document.getElementById("AdminContent").style.display = 'block'; 
 //   }else
  //  {
  //    alert("Invalid username/password");
  //  event.target.reset();
  //  }

  // };

  const EVENT_API_URL = "https://p19j0kcg1f.execute-api.us-east-1.amazonaws.com/live"

  const createNewEvent = async (event) =>{
    event.preventDefault();
    start_loadingPage("adminPageLoading");
    let newEvent = {
      EventId: event.target[0].value,
      Title: event.target[1].value,
      Description: event.target[2].value,
      Organizer: event.target[3].value,
      Date: event.target[4].value,
      Time: event.target[5].value,
      Fee: event.target[6].value
    };
    await axios.post(EVENT_API_URL +'/events', newEvent).then(response => {
      if(response.data.statusCode == 200){
        stop_loadingPage("adminPageLoading");
        alert("Event Added successfully")
        event.target.reset();
        
      }
      else{
        stop_loadingPage("adminPageLoading");
        alert(response.data.body);
      }
    })
    .catch(error => {
      stop_loadingPage("adminPageLoading");
      alert(error)
    });
  }

  const fetchEvents = async (event)=>{
    try{
      event.preventDefault();
    }catch{
      //pass
    }
    start_loadingPage("eventsPageLoading");
    await axios.get(EVENT_API_URL +'/events').then(response => {
      if(response.data.statusCode == 200){
        stop_loadingPage("eventsPageLoading");
        console.log(response.data.body);
        let body = JSON.parse(response.data.body);
        setEvents(body);
        console.log("event");
        console.log(events);
        try{
          event.target.reset();
        }catch{
          //pass
        }
        
      }
      else{
        stop_loadingPage("eventsPageLoading");
        alert(response.data.body);
      }
    })
    .catch(error => {
      stop_loadingPage("eventsPageLoading");
      alert(error)
    });
  }
  
  const deleteEvent = async (event)=>{
    event.preventDefault();
    start_loadingPage("adminPageLoading");
    let eventId = event.target[0].value;
    await axios.delete(EVENT_API_URL +'/events/'+eventId).then(response => {
      if(response.data.statusCode == 200){
        stop_loadingPage("adminPageLoading");
        console.log(response.data.body);
        let body = JSON.parse(response.data.body);
        setEvents(body);
        event.target.reset();
        alert("Event Deleted Successfully");
      }
      else{
        stop_loadingPage("adminPageLoading");
        alert(response.data.body);
      }
    })
    .catch(error => {
      stop_loadingPage("adminPageLoading");
      alert(error)
    });
  }

  const notifyOrFetchAttendees = async(event) =>{
    event.preventDefault();
    start_loadingPage("adminPageLoading");
    let eventId = event.target[0].value;
    if (event.nativeEvent.submitter.name === "fetchAttendees") {
      await axios.get(EVENT_API_URL +'/events/'+eventId+'/attendees').then(response => {
        if(response.data.statusCode == 200){
          let body = JSON.parse(response.data.body);
          setAttendees(body);
          stop_loadingPage("adminPageLoading");
          event.target.reset();
          show_attendeesTable();
        }
        else{
          stop_loadingPage("adminPageLoading");
          alert(response.data.body);
        }
      })
      .catch(error => {
        stop_loadingPage("adminPageLoading");
        alert(error)
      }); 
    }else if (event.nativeEvent.submitter.name === "fetchFeedbacks"){
      
    await axios.get(EVENT_API_URL +'/events/'+eventId+'/feedback').then(response => {
      if(response.data.statusCode == 200){
        let body = JSON.parse(response.data.body);
        setFeedbacks(body);
        stop_loadingPage("adminPageLoading");
        event.target.reset();
        show_feedbacksTable();
      }
      else{
        stop_loadingPage("adminPageLoading");
        alert(response.data.body);
      }
    })
    .catch(error => {
      stop_loadingPage("adminPageLoading");
      alert(error)
    });
    }else {
      await axios.post(EVENT_API_URL +'/events/'+eventId+'/notify').then(response => {
        if(response.data.statusCode == 200){
          stop_loadingPage("adminPageLoading");
          event.target.reset();
          alert("Notifications sent");
        }
        else{
          stop_loadingPage("adminPageLoading");
          alert(response.data.body);
        }
      })
      .catch(error => {
        stop_loadingPage("adminPageLoading");
        alert(error)
      });
    }

  }

  const registerPopUp = async (event) =>{
    start_loadingPage("eventsPageLoading");
    event.preventDefault();
  
    let newAttendee = {
      Name: event.target[0].value,
      AttendeeId: event.target[1].value,
      Email: event.target[2].value,
      Phone: event.target[3].value,
      EventId : registerEventId
    };
    console.log(newAttendee);
    let eventId = registerEventId;
    await axios.post(EVENT_API_URL +'/events/'+eventId+'/attendees', newAttendee).then(response => {
      if(response.data.statusCode == 200){
        stop_loadingPage("eventsPageLoading");
        console.log(response.data.body);
        let body = JSON.parse(response.data.body);
        console.log(body);
        event.target.reset();
        togglePopup();
      }
      else{
        stop_loadingPage("eventsPageLoading");
        alert(response.data.body);
      }
    })
    .catch(error => {
      stop_loadingPage("eventsPageLoading");
      alert(error)
    });
  }

  const start_loadingPage = (id) => {
    document.getElementById(id).style.display = "block";
    document.getElementById(id).style.opacity = "1";
  }
  const stop_loadingPage = (id) => {
    document.getElementById(id).style.display = "none";
    document.getElementById(id).style.opacity = "0";
  }

  const show_attendeesTable = () => {
    document.getElementsByClassName("attendees-overlay-container")[0].style.display = "block";
    document.getElementsByClassName("attendees-overlay-container")[0].style.opacity = "1";
  }


  const hide_attendeesTable = () => {
    document.getElementsByClassName("attendees-overlay-container")[0].style.display = "none";
    document.getElementsByClassName("attendees-overlay-container")[0].style.opacity = "0";
  }

  const show_feedbacksTable = () => {
    document.getElementsByClassName("feedbacks-overlay-container")[0].style.display = "block";
    document.getElementsByClassName("feedbacks-overlay-container")[0].style.opacity = "1";
  }


  const hide_feedbacksTable = () => {
    document.getElementsByClassName("feedbacks-overlay-container")[0].style.display = "none";
    document.getElementsByClassName("feedbacks-overlay-container")[0].style.opacity = "0";
  }

  const submitFeedback = async (event) => {
    event.preventDefault();
    start_loadingPage("feedbackPageLoading");
    let newFeedback = {
      Attendee: event.target[0].value,
      EventId: event.target[1].value,
      Rating: event.target[2].value,
      Comments: event.target[3].value
    };
    console.log(parseInt(event.target[2].value));
    await axios.post(EVENT_API_URL +'/events/0/feedback', newFeedback).then(response => {
      if(response.data.statusCode == 200){
        stop_loadingPage("feedbackPageLoading");
        event.target.reset();
        alert("Feedback submitted");
      }
      else{
        stop_loadingPage("feedbackPageLoading");
        alert(response.data.body);
      }
    })
    .catch(error => {
      stop_loadingPage("feedbackPageLoading");
      alert(error)
    });
  }

  const fetchFeedbacks = async (event) => {
    try{
      event.preventDefault();
    
    }catch{
      //pass  
    }
    start_loadingPage("adminPageLoading");
    let eventId = event.target[0].value;
    await axios.get(EVENT_API_URL +'/events/'+eventId+'/feedback').then(response => {
      if(response.data.statusCode == 200){
        let body = JSON.parse(response.data.body);
        setFeedbacks(body);
        stop_loadingPage("adminPageLoading");
        event.target.reset();
        show_feedbacksTable();
      }
      else{
        stop_loadingPage("adminPageLoading");
        alert("else : " + response.data.body);
        console.log(response);
      }
    })
    .catch(error => {
      stop_loadingPage("adminPageLoading");
      alert("catch : " + error)
    });
  }

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
        // //////////////////////////////////
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
        ////////////////////////////////////////////////////

        imageURL,
        setImageURL,
        searchImage,
        getTextFile,
        countries,
        setCountries,
        addCountry,
        deleteCountry,

        sendApiRequest,
        apiAsyncResponse,
        setApiAsyncResponse,
        apiSyncResponse,
        setApiSyncResponse,
        processApiRequest,
        processApiResponse,
        checkStatus,
        checkStatusResponse,

        systemValue,
        performSps,
        userValue,
        spsResult,
        peformHc,
        SetUserHcValue,
        userHcValue,
        systemHcValue,
        setHcScore,
        hcScore,

        ///////
        clickingRadioOne,
        clickingRadioTwo,
        clickingRadioThree,

        ///////////
        addNewTask,
        updateTask,
        filterTasks,
        getTasks,
        tasks,
        deleteTask,

        ///////
        togglePopup,
        showContent,
        showLogin,
        adminLogin,
        createNewEvent,
        events, 
        setEvents,
        deleteEvent,
        notifyOrFetchAttendees,
        registerPopUp,
        attendees,
        hide_attendeesTable,
        submitFeedback,
        hide_feedbacksTable,
        feedbacks        

      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
