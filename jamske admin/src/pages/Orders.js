import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";

export default function Orders() {
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
    const Orders = [
        {
            id: "#123465798",
            name: "John Deo",
            Seller_Email: "johndeo@gmail.com",
            Seller_ID: "15",
            Amount: "$37.50",
            Date: "01/10/2021",
        },
        {
            id: "#123465798",
            name: "John Deo",
            Seller_Email: "johndeo@gmail.com",
            Seller_ID: "15",
            Amount: "$37.50",
            Date: "01/10/2021",
        },
        {
            id: "#123465798",
            name: "John Deo",
            Seller_Email: "johndeo@gmail.com",
            Seller_ID: "15",
            Amount: "$37.50",
            Date: "01/10/2021",
        },
        {
            id: "#123465798",
            name: "John Deo",
            Seller_Email: "johndeo@gmail.com",
            Seller_ID: "15",
            Amount: "$37.50",
            Date: "01/10/2021",
        },
        {
            id: "#123465798",
            name: "John Deo",
            Seller_Email: "johndeo@gmail.com",
            Seller_ID: "15",
            Amount: "$37.50",
            Date: "01/10/2021",
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
            name: "name",
            label: "Name",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Seller_Email",
            label: "Seller Email",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Seller_ID",
            label: "Seller ID",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "text-center" }),
                setCellHeaderProps: () => ({ className: "table-head-class" }),
            },
        },
        {
            name: "Amount",
            label: "Amount",
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
                                        <h1 className="mb-0">Orders</h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-2">
                                        <input type="date" className="form-control login-comn-input-1 mb-sm-0 mb-2" />
                                        <span>To</span>
                                        <input type="date" className="form-control login-comn-input-1 mt-sm-0 mt-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="bx-white-main comn-table-box">
                                    <MUIDataTable data={Orders} columns={columns} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
