const Form = ({
  handleSubmit,
  handleChange,
  handleEmailChange,
  handlePasswordChange,
  email,
  password,
}) => {
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h4>Analysis Chart</h4>
      <div className="form-content">
        <span>
          <label>Chart-Name</label>
          <select
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value="">All</option>
            <option value="vertical"> Chart 1</option>
            <option value="area">Chart 2</option>
            <option value="donut">Chart 3</option>
            <option value="horizontalbar">Chart 4</option>
            <option value="pie">Chart 5</option>
            <option vlaue="coordinateline">Chart 6</option>
          </select>
          <br />
        </span>

        <span>
          <label>Email</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />
        </span>
        <span>
          <label>Password</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />
        </span>

        <span className="submit-btn">
          {/* <input type="submit" value="Submit"/>  */}
          <button type="submit">Submit</button>
        </span>
      </div>
      <div className="box-corner"></div>
    </form>
  );
};
export default Form;
