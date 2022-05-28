import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../../api'
import {
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
  CDropdownItem,
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CFormLabel,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine, CChartPie } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilCalendar,
  cilArrowLeft,
  cilText,
} from '@coreui/icons'

const Breadcrumbs = () => {
  const [peserta, setPeserta] = useState([])
  const [grade, setGrade] = useState([])
  const [nip, setNIP] = useState("")
  const readPeserta = () => 
    axios.get(
      `${url}/api/pegawais?populate`)
  const readGrade = () => axios.get(`${url}/api/grades?populate=jenjangs`)

  
  useEffect(() => {
    const fetchData = async () => {
      const result = await readPeserta();
      const arr = result.data.data;
    console.log(arr)
     setPeserta(arr);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result2 = await readGrade();
      const arr2 = result2.data.data;
    console.log(arr2);
    console.log(arr2.length);
     setGrade(arr2);
    };
    fetchData();
  }, []);

  function dataPeserta() { 
    const idx = peserta.findIndex(x => 
      x.attributes.pegawai.data.attributes.nip === document.getElementById("nip").value)
    console.log(idx)
    console.log(pegawai[idx].data)
  // document.getElementById("nama").value = pegawai[idx].data.attributes.nama
  // document.getElementById("jabatan").value = pendaftar[idx].attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan
  // document.getElementById("grade").value = pendaftar[idx].attributes.pegawai.data.attributes.grade.data.attributes.nama_grade
    dataJenjang()

  }

  function submit(e) {
    const idx = peserta.findIndex(x => 
      x.attributes.pegawai.data.attributes.nip === document.getElementById("nip").value)
    e.preventDefault();
    axios.post(uri,{
      data : {
        pesertas: peserta[idx].id,
    }
    })
    .then(res=>{
      console.log(res.data)
    })
    console.log(document.getElementById("ppt").value)
  }
  return (
    <CRow>
    <CCard>
    <CButton style={{width:120}} color="secondary" className='m-3'>
        <CIcon icon={cilArrowLeft}></CIcon> Kembali
        </CButton>
      <CCardHeader style={{textAlign:"center"}}>
        <h4>Tambah data peserta</h4>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol> Input NIP : </CCol>
          <CCol style={{flex:1}}>
          <CInputGroup className="mb-3">
            <CFormInput
              color="secondary" style={{ width:350}} type="number"
              id="nip" placeholder="NIP" 
              value={nip}
              onChange={(e) => {
              setNIP(e.target.value);
              console.log(nip)
          }}
            />
          </CInputGroup>
            </CCol>
            <CCol style={{flex:1}}>
              <CButton type="submit" color="warning" variant="outline" id="cek" onClick={() => dataPeserta()}>CEK</CButton>
            </CCol>
            </CRow>
            <CRow className="mb-3">
            <CFormLabel htmlFor="nama" className="col-sm-2 col-form-label">Nama</CFormLabel>
            <CCol sm={10}>
              <CFormInput type="text" id="nama" placeholder="Nama" disabled/>
            </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="jabatan" className="col-sm-2 col-form-label">Jabatan</CFormLabel>
              <CCol sm={10}>
                <CFormInput type="text" id="jabatan" placeholder="Jabatan" disabled/>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="grade" className="col-sm-2 col-form-label">Grade</CFormLabel>
              <CCol sm={10}>
                <CFormInput type="text" id="grade" placeholder="Grade" disabled/>
              </CCol>
            </CRow>
            <CRow>
            <CButton style={{width:120, alignSelf:"center"}}  onClick={() => dataPeserta()}>Tambah</CButton>
            </CRow>
            <CRow>
      <CCol xs>
        <CCard className="mb-4">
       
          
        </CCard>
      </CCol>
    </CRow>
      </CCardBody>
    </CCard>
  </CRow>
  )
}

export default Breadcrumbs
