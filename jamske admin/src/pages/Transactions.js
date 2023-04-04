import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";

export default function Transactions() {
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
    const Transactions = [
        {
            Invoice_ID: "#123478",
            Coustomer: "John Deo",
            Method: "Mastercard",
            Date: "01/10/2021",
            Time: "12:50 Pm",
        },
        {
            Invoice_ID: "#123478",
            Coustomer: "John Deo",
            Method: "Mastercard",
            Date: "01/10/2021",
            Time: "12:50 Pm",
        },
        {
            Invoice_ID: "#123478",
            Coustomer: "John Deo",
            Method: "Mastercard",
            Date: "01/10/2021",
            Time: "12:50 Pm",
        },
        {
            Invoice_ID: "#123478",
            Coustomer: "John Deo",
            Method: "Mastercard",
            Date: "01/10/2021",
            Time: "12:50 Pm",
        },
    ];
    const columns = [
        {
            name: "Invoice_ID",
            label: "Invoice ID",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Coustomer",
            label: "Coustomer",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Method",
            label: "Method",
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
            name: "Time",
            label: "Time",
            options: {
                filter: false,
                sort: true,
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
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
                                        <h1 className="mb-0">Transactions</h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-2">
                                        <button className="w-100 btn-comn-class">Export List</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="bx-white-main comn-table-box">
                                    <MUIDataTable data={Transactions} columns={columns} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </UserLayout>
    </>
  )
}
