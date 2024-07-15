import React from "react";
import { useState } from "react";
import NO_DATA_2 from "../assets/no_data_img.png";
import Loader from "./Loader";

const TableContainer = ({ children }) => (
  <div className="mx-15">{children}</div>
);

const Table = ({ title, headers, data, mobileView, loading }) => {
  return (
    <TableContainer>
      {data && data.length > 0 ? (
        <>
          <div className="hidden md:block">
            <table className="w-full">
              <thead className="bg-[#fafafa]">
                <tr className="header">
                  {headers.map((header, i) => (
                    <td key={i} className="p-4 font-semibold">
                      {header}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td className="p-5">
                      <div className="inline-flex justify-center items-center w-full">
                        <Loader />
                      </div>
                    </td>
                  </tr>
                ) : (
                  <>
                    {data.map((row, i) => {
                      return (
                        <tr key={i} className="border-b border-[#E4E7EC]">
                          {Object.keys(row).map((column, idx) => {
                            console.log(column);
                            return (
                              <td key={idx} className="p-5">
                                {column === "status" ? (
                                  row[column] !== "" ? (
                                    <button
                                      className={`${
                                        row[column] === "pending"
                                          ? "bg-[#FFEAD4]"
                                          : "bg-[#ECFDF3]"
                                      } px-3.5 py-0.5 rounded-full flex gap-2 items-center`}
                                    >
                                      <span
                                        className={`${
                                          row[column] === "pending"
                                            ? "bg-[#FF7F51]"
                                            : "bg-[#12B76A]"
                                        } inline-block w-3 h-3 rounded-full`}
                                      ></span>
                                      <span
                                        className={`${
                                          row[column] === "pending"
                                            ? "text-[#FF7F51]"
                                            : "text-[#12B76A]"
                                        } capitalize`}
                                      >
                                        {row[column]}
                                      </span>
                                    </button>
                                  ) : (
                                    "None"
                                  )
                                ) : (
                                  row[column]
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </>
                )}
              </tbody>
            </table>
          </div>

          <div className="md:hidden">
            <MobileTable data={data} mobileView={mobileView} />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <img
            alt="not-found"
            src={NO_DATA_2}
            className="w-48"
            width={200}
            height={200}
          />
          <span className="text-sm">
            There are currently no {title ?? "data"} found
          </span>
        </div>
      )}
    </TableContainer>
  );
};

export default Table;

const MobileTable = ({ data, mobileView }) => {
  return (
    <div className="flex flex-col justify-between xs:flex-row flex-wrap gap-y-3.5">
      {data.map((row, i) => {
        return (
          <React.Fragment key={i}>
            {React.cloneElement(mobileView, { data: row })}
          </React.Fragment>
        );
      })}
    </div>
  );
};
