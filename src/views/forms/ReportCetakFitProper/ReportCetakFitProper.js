import React, { useState, useEffect } from "react";
import url from 'src/api';
import axios from "axios";
import {
  CAvatar,
  // CButton,
  // CButtonGroup,
  CCard,
  CCardBody,
  //CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from "@coreui/react";
//import { CChartLine } from '@coreui/react-chartjs'
//import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from "@coreui/icons-react";
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  // cibGoogle,
  // cibFacebook,
  // cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  // cibTwitter,
  // cilCloudDownload,
  cilPeople,
  // cilUser,
  // cilUserFemale,
  cilUserFollow,
  cilPen,
  cilTrash
} from "@coreui/icons";
import { Route, useNavigate, Link, NavigationType } from "react-router-dom";

const ReportCetakFitProper = ({navigation}) => {
  const [peserta, setPeserta] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const result = await axios.get(`${url}/api/pendaftars`);
    console.log(result.data.data);
    const arr = result.data.data;
    setPeserta(arr);
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
    <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Report Nilai Peserta Fit Proper</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">No</CTableHeaderCell>
                    <CTableHeaderCell>Tanggal</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Proyeksi Jabatan</CTableHeaderCell>
                    <CTableHeaderCell>Lihat</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {peserta.map((item, index) => (
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="text-center">
                      <div>{index+1}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.tangal}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.attributes.proyeksi_jabatan}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      
                      <Link to={{
                      }}>
                      <CButton color="info">
                          Lihat Nilai
                        </CButton>
                          </Link>
                          {/* <CButton color="#ff0000" onClick={(async ()=>{ await axios.delete(`${url}/api/pesertas/${item.id}`) &fetchData() & alert("delete berhasil")})}>
                          
                      </CButton> */}
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default ReportCetakFitProper;
