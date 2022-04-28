import { useState } from "react";
import Logo from "../../cyber-kit.png";
import Chart from "../chart";
import Form from "../form";
import Data from "../../Data";

const Home = () => {
  const [chartName, setChartName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chartData, setChartData] = useState(Data);

  const handleChange = (e) => {
    setChartName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    if (password != "password") {
      alert("password Not Match (for demo try 'password')");
      return;
    }
    var keys = Object.keys(Data).filter((i) =>
      i.toLowerCase().startsWith(chartName)
    );
    console.log(keys);
    var updated_data = {};
    for (var x in Data) {
      console.log(keys.indexOf(x));
      if (keys.indexOf(x) >= 0) {
        updated_data[x] = Data[x];
      }
    }
    setChartData(updated_data);

    e.preventDefault();
  };
  let data = {
    handleSubmit,
    handleChange,
    handleEmailChange,
    handlePasswordChange,
    chartName,
    email,
    password,
  };
  console.log(chartData);
  return (
    <>
      <div className="form-cover">
        <div className="logo-part">
          <img src={Logo} alt="Cyber kit Logo" />
        </div>
        <Form {...data} />
      </div>
      <div className="chart-cover">
        <Chart data={chartData} />
      </div>
    </>
  );
};
export default Home;
