import "./single.scss";
import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import Chart from "./../../components/chart/Chart";
import Table from "./../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/391553731_872047491195874_6863311722950822310_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFoj_pllvKnbyQTGN3CTkfW8a2QWObIhBHxrZBY5siEEas-SbJNC4q_VJOuQgkJLzisf0ql52JZMQl0XDAcg_YN&_nc_ohc=bT-GizwbU98AX_8v-xw&_nc_ht=scontent.fdac24-4.fna&oh=00_AfAKrIrbvLwvlLT3hbYPVESog9m-WLo1nuyT2WS048IfRQ&oe=6563F2A1"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Ruhul Amin</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">ruhul@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">01762717397</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Dhaka BD</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              title="User spending Last 6 Months (Revenue)"
              aspect={4 / 1}
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Single;
