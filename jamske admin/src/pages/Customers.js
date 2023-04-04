import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import Profile from "../images/customer.png";

export default function Customers() {
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
        sort: true,
        pagination: true,
        filter: false,
        filterType: "dropdown",
        toolbar: false,
        searchOpen: false,
        search: false,
    };
    const Customers = [
        {
            id: "#1",
            Name: "John Deo",
            Mail_ID: "johndeo@gmail.com",
            Date: "08/10/2021",
        },
        {
            id: "#1",
            Name: "John Deo",
            Mail_ID: "johndeo@gmail.com",
            Date: "08/10/2021",
        },
        {
            id: "#1",
            Name: "John Deo",
            Mail_ID: "johndeo@gmail.com",
            Date: "08/10/2021",
        },
        {
            id: "#1",
            Name: "John Deo",
            Mail_ID: "johndeo@gmail.com",
            Date: "08/10/2021",
        },
    ];
    const columns = [
        {
            name: "id",
            label: "#ID",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Photo",
            label: "Photo",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "text-center" }),
                setCellHeaderProps: () => ({ className: "table-head-class" }),
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <span className="comn-table-profile">
                            <img src={Profile} className="img-fluid" alt="Profile" />
                        </span>
                    );
                },
            },
        },
        {
            name: "Name",
            label: "Name",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Mail_ID",
            label: "Mail ID",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Date",
            label: "Date",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Status",
            label: "Status",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="comn-status-class received-class">Active</span>;
                },
            },
        },
        {
            label: "Action",
            name: "Action",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "text-center" }),
                setCellHeaderProps: () => ({ className: "text-center" }),
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <button className="border-0 bg-transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                            </svg>
                        </button>
                    );
                },
            },
        },
    ];
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <div className="d-md-flex d-block align-items-center">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">Customers</h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-2">
                                        <button className="w-100 btn-comn-class">Export List</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="bx-white-main comn-table-box">
                                    <MUIDataTable data={Customers} columns={columns} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
