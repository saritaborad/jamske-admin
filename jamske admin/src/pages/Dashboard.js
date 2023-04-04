import UserLayout from "../components/UserLayout";
import Dash_1 from "../images/dash-top-1.svg";
import Dash_2 from "../images/dash-top-2.svg";
import Dash_3 from "../images/dash-top-3.svg";
import Dash_4 from "../images/dash-top-4.svg";
import Dash_5 from "../images/dash-top-5.svg";
import Chart from "react-apexcharts";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";

export default function Dashboard(params) {
    const options = {
        page: 1,
        show: false,
        sizePerPage: 5,
        totalSize: 10,
        responsive: "standard",
        onColumnSortChange: (changedColumn, direction) => console.log("changedColumn: ", changedColumn, "direction: ", direction),
        onChangeRowsPerPage: (numberOfRows) => console.log("numberOfRows: ", numberOfRows),
        onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
        selectableRows: false,
        download: false,
        print: false,
        viewColumns: false,
        sort: false,
        pagination: false,
        filter: false,
        filterType: "dropdown",
        toolbar: false,
        searchOpen: false,
        search: false,
    };
    const Request = [
        {
            No: "1",
            Transation_ID: "#1593195485",
            Name: "Joh Doe",
            Subscription: "Family plan",
            Date: "1/17/2022",
            Price: "$23.67",
        },
        {
            No: "2",
            Transation_ID: "#1593195485",
            Name: "Joh Doe",
            Subscription: "Family plan",
            Date: "1/17/2022",
            Price: "$23.67",
        },
        {
            No: "3",
            Transation_ID: "#1593195485",
            Name: "Joh Doe",
            Subscription: "Family plan",
            Date: "1/17/2022",
            Price: "$23.67",
        },
        {
            No: "4",
            Transation_ID: "#1593195485",
            Name: "Joh Doe",
            Subscription: "Family plan",
            Date: "1/17/2022",
            Price: "$23.67",
        },
        {
            No: "5",
            Transation_ID: "#1593195485",
            Name: "Joh Doe",
            Subscription: "Family plan",
            Date: "1/17/2022",
            Price: "$23.67",
        },
    ];
    const columns = [
        {
            name: "No",
            label: "No.",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Transation_ID",
            label: "Transation ID",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Name",
            label: "Name",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Subscription",
            label: "Subscription",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "table-bold-font" }),
            },
        },
        {
            name: "Date",
            label: "Date",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: "Price",
            label: "Price",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "price-text-class table-bold-font" }),
            },
        },
        {
            name: "",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "p-0" }),
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <button className="dash-table-btn">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    );
                },
            },
        },
    ];
    const chart1 = {
        series: [
            {
                name: "Clients Overview",
                data: [10, 25, 15, 30, 17, 35, 40],
            },
        ],
        fill: {
            opacity: 1,
        },
        chart: {
            height: 300,
            type: "area",
            fontFamily: "Rubik",
            zoom: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#0066B9"],
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            width: 2,
            dashArray: 0,
        },
    };
const chart2 = {
        series: [70, 20, 10],
            chart: {
                type: "donut",
                height: 300,
                fontFamily: "Rubik",
                zoom: {
                    enabled: true,
                },
            },
            stroke: {
                show: true,
                curve: "smooth",
                lineCap: "butt",
                width: 0,
                dashArray: 0,
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                position: "bottom",
                horizontalAlign: "center",
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                color: "#1081E8",
                                fontSize: "24px",
                            },
                        },
                        size: "85%",
                    },
                },
            },
            labels: ["Business plan", "Family plan", "Free plan"],
            colors: ["#0066B9", "#093D7D", "#52E5BB"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: "100%",
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
    };
const chart3 = {
        series: [
            {
                name: "Paid",
                data: [7000, 9000, 8100, 7500, 6000, 8000, 8050],
            },
            {
                name: "Free",
                data: [2000, 2500, 3000, 3300, 2200, 4500, 4300],
            },
        ],

            chart: {
                type: "bar",
                height: 300,
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10,
                    columnWidth: "50%",
                },
            },
            colors: ["#0066B9", "#52E5BB"],
            dataLabels: {
                enabled: false,
            },
            legend: {
                position: "top",
                horizontalAlign: "right",
                fontSize: "16px",
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"],
            },
            xaxis: {
                categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            
            },
            yaxis: {
                categories: [0, 2000, 4000, 6000, 8000, 10000],
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands";
                    },
                },
            },

     
    };



    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <div className="comn-title-main">
                                    <h1 className="mb-0">Dashboard</h1>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="row me-0 justify-content-center">
                                    <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                        <div className="dash-top-box fix-span">
                                            <span className="dash-span-1">
                                                <img src={Dash_1} alt="1" />
                                            </span>
                                            <p>$15659.90</p>
                                            <div className="dash-top-box-info d-flex align-items-center">
                                                <bdi>Total Revenue</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                        <div className="dash-top-box fix-span">
                                            <span className="dash-span-2">
                                                <img src={Dash_2} alt="2" />
                                            </span>
                                            <p>25960</p>
                                            <div className="dash-top-box-info d-flex align-items-center">
                                                <bdi>Total Users</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                        <div className="dash-top-box fix-span">
                                            <span className="dash-span-3">
                                                <img src={Dash_3} alt="3" />
                                            </span>
                                            <p>9631</p>
                                            <div className="dash-top-box-info d-flex align-items-center">
                                                <bdi>Subscribed Users</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                        <div className="dash-top-box fix-span">
                                            <span className="dash-span-4">
                                                <img src={Dash_4} alt="4" />
                                            </span>
                                            <p>21000</p>
                                            <div className="dash-top-box-info d-flex align-items-center">
                                                <bdi>Total Devices</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                        <div className="dash-top-box fix-span">
                                            <span className="dash-span-5">
                                                <img src={Dash_5} alt="5" />
                                            </span>
                                            <p>159</p>
                                            <div className="dash-top-box-info d-flex align-items-center">
                                                <bdi>Total Cities</bdi>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 h-100">
                                <div className="row me-0">
                                    <div className="col-xxl-7 mb-3">
                                        <div className="row">
                                            <div className="col-md-6 pe-0">
                                                <div className="dash-part-hdr">
                                                    <div className="dash-part-hdr-top">
                                                        <span>Clients Overview</span>
                                                    </div>
                                                    <div className="chart-main-part"><Chart options={chart1} series={chart1.series} height={300} type="area" /></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 pe-0 mt-3 mt-md-0">
                                                <div className="dash-part-hdr">
                                                    <div className="dash-part-hdr-top d-flex">
                                                        <span>Demographics</span>
                                                        <span className="ms-auto chart-data">25960</span>
                                                    </div>
                                                    <div className="chart-main-part"><Chart options={chart2} series={chart2.series} height={300} type="donut" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-5 mb-3">
                                        <div className="row">
                                            <div className="col-12 pe-0">
                                                <div className="dash-part-hdr">
                                                    <div className="dash-part-hdr-top">
                                                        <span>Users</span>
                                                    </div>
                                                    <div className="chart-main-part"><Chart options={chart3} series={chart3.series} type="bar" height={300} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row align-items-center">
                                    <div className="col-xxl-4 mb-3">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-table-hdr d-flex align-items-center">
                                                <span>Top Cities</span>
                                                <div className="ms-auto">
                                                    <Link to="#">See All</Link>
                                                </div>
                                            </div>
                                            <div className="dash-part-btm">
                                                <div className="dash-btm-info-comn">
                                                    <div className="dash-btm-info-logo logo-color-1">M</div>
                                                    <div className="ms-2">
                                                        <h5>Manhattan</h5>
                                                        <p>
                                                            New york <span>USA</span>
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto dash-btm-rgt-info">
                                                        <h5>156048</h5>
                                                        <span>+5.00%</span>
                                                    </div>
                                                </div>
                                                <div className="dash-btm-info-comn">
                                                    <div className="dash-btm-info-logo logo-color-2">L</div>
                                                    <div className="ms-2">
                                                        <h5>Los Angeles</h5>
                                                        <p>
                                                            California <span>USA</span>
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto dash-btm-rgt-info">
                                                        <h5>156048</h5>
                                                        <span>+5.00%</span>
                                                    </div>
                                                </div>
                                                <div className="dash-btm-info-comn">
                                                    <div className="dash-btm-info-logo logo-color-3">C</div>
                                                    <div className="ms-2">
                                                        <h5>Chicago</h5>
                                                        <p>
                                                            Illinois <span>USA</span>
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto dash-btm-rgt-info">
                                                        <h5>156048</h5>
                                                        <span>+1.75%</span>
                                                    </div>
                                                </div>
                                                <div className="dash-btm-info-comn border-0">
                                                    <div className="dash-btm-info-logo logo-color-4">H</div>
                                                    <div className="ms-2">
                                                        <h5>Houston</h5>
                                                        <p>
                                                            Texas <span>USA</span>
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto dash-btm-rgt-info">
                                                        <h5>156048</h5>
                                                        <span>+1.75%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-8 mb-3">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-table-hdr d-flex align-items-center">
                                                <span>Latest Transations</span>
                                                <div className="ms-auto">
                                                    <Link to="#">See All</Link>
                                                </div>
                                            </div>
                                            <div className="bx-white-main new-brd-class  diff-head-table">
                                                <MUIDataTable data={Request} columns={columns} options={options} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
