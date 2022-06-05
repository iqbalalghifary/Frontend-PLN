import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../../api'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormCheck,
  CFormGroup,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const nilaiFP = () => {

  //const [penguji, setPenguji] = useState([]);
  const navigate = useNavigate();

  // const fetchData1 = async () => {
  //   const result = await axios.get(`${url}/api/pengujis?populate[pegawai][fields][0]=nama&populate[pegawai][fields][1]=nip&populate[pegawai][populate][0]=jabatan&populate[pegawai][populate][1]=grade&populate[pegawai][populate][2]=jenjang`);
  //   console.log(result.data.data);
  //   const arr = result.data.data;
  //   setPenguji(arr);
  // };

  const {nip} = useParams()
  console.log(nip);
  const [pendaftar, setPendaftar] = useState([])
  const [nama, setNama] = useState("")
  const [tanggal, setTanggal] = useState("")
  const [angka, setAngka] = useState([]);
  const readPendaftar = () => 
  axios.get(
    `${url}/api/pendaftars?populate[peserta][populate]=pegawai&populate[pengujis][populate]=pegawai`)

  useEffect(() => {
    const fetchData = async () => {
      const result = await readPendaftar();
      const arr = result.data.data;
    console.log(arr)
      setPendaftar(arr);
    };
    fetchData();
    nilai();
  }, []);

  const nilai = () => {
    let i = 5;
    let nilai =[0];
    while (i<=100) {
      nilai = nilai.concat(i);
      i = i+5;
    }
    setAngka(nilai);
  }
  
  const identitas = () => {
    const idx = pendaftar.findIndex(x => 
      x.attributes.peserta.data.attributes.pegawai.data.attributes.nip === document.getElementById("nip").value)
    //console.log(idx)
    // setNama(pendaftar[idx].attributes.peserta.data.attributes.pegawai.data.attributes.nama)
    // setTanggal(pendaftar[idx].attributes.tangal)
  }
    console.log(idx)
    console.log(nama)
    console.log(tanggal)
  //  pendaftar.findIndex(x => 
  //   x.attributes.peserta.data.attributes.pegawai.data.attributes.nip === document.getElementById("nip").value)
  // console.log(idx)
  // document.getElementById("tanggal").value=pendaftar[idx].attributes.tangal
  // // let nama = pendaftar[idx].attributes.peserta.data.attributes.pegawai.data.attributes.nama
  // console.log(pendaftar[idx].attributes.tangal)
  // // console.log(pendaftar.attributes.peserta.data.attributes.pegawai.data.attributes.nama)
  

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">  
          <CCardHeader>
            <CRow className="mb-3" >
                <CCol sm={4}>
                    <CFormInput type="text" id="nama" placeholder="Nama"
                    disabled/>
                </CCol>
                <CCol sm={3}>
                    <CFormInput type="text" id="nip" placeholder="NIP" value={nip} disabled/>
                </CCol>
                <CCol sm={2}>
                    <CFormInput type="date" id="tanggal" placeholder="Tanggal" disabled/>
                </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
          <CRow className="mb-3" >
          <CFormLabel className="col-sm-1 col-form-label">Penguji: </CFormLabel>
              <CCol sm={3}>
                <CFormInput type="text" id="nip" placeholder="NIP Penguji"/>
              </CCol>
              
            </CRow>
          <CTable className="border border-2 bordered" hover responsive>
          <CTableHead color='light' className=' border border-2 text-center'>
            <CTableRow >
              <CTableHeaderCell className=' border border-2' rowSpan={2} >No</CTableHeaderCell>
              <CTableHeaderCell className=' border border-2'colSpan={4}>Tabel Penilaian</CTableHeaderCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell className=' border border-2'>Key Factor</CTableHeaderCell>
            <CTableHeaderCell className=' border border-2'>Aspek Penilaian</CTableHeaderCell>
            <CTableHeaderCell className=' border border-2'>Uraian Penilaian</CTableHeaderCell>
            <CTableHeaderCell className=' border border-2'>Nilai</CTableHeaderCell>
            </CTableRow>
         </CTableHead>
         
         <CTableBody className=' border border-2'>
           <CTableRow>
            <CTableDataCell className=' border border-2 text-center'rowSpan={12}>1</CTableDataCell>
            <CTableDataCell className=' border border-2' rowSpan={12}>Key Competencies</CTableDataCell>
           </CTableRow>
            <CTableRow>
              <CTableDataCell className=' border border-2' rowSpan={3}>Personal Aspek</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className=' border border-2' >Enthusiasthic for Challenge</CTableDataCell>
              <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                  </CFormSelect></CCol></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className=' border border-2'>Creative & Innovative</CTableDataCell>
              <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                </CFormSelect></CCol></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className=' border border-2' rowSpan={2}>Interpersonel Skill</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className=' border border-2'>Building Business Partnership</CTableDataCell>
              <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                  </CFormSelect></CCol></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className=' border border-2' rowSpan={4}>Managing the Business</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className=' border border-2'>Business Acumen</CTableDataCell>
              <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                  </CFormSelect></CCol></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className=' border border-2'>Customer Focus Oriented</CTableDataCell>
              <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                  </CFormSelect></CCol></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className=' border border-2'>Driving Execution</CTableDataCell>
              <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                  </CFormSelect></CCol></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className=' border border-2'rowSpan={2}>Leaderships</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className=' border border-2'>Empowering / Developing Others</CTableDataCell>
              <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                  </CFormSelect></CCol></CTableDataCell>
            </CTableRow>

          <CTableRow>
           <CTableDataCell className=' border border-2 text-center'rowSpan={7}>2</CTableDataCell>
           <CTableDataCell className=' border border-2' rowSpan={7}>Proyeksi Jabatan</CTableDataCell>
          </CTableRow>
           <CTableRow>
            <CTableDataCell className=' border border-2' rowSpan={4}>Technical Knowledge</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableDataCell className=' border border-2'>Aspek Pemasaran dan Niaga</CTableDataCell>
            <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                  </CFormSelect></CCol></CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableDataCell className=' border border-2'>Aspek Keteknisan</CTableDataCell>
            <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                  </CFormSelect></CCol></CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableDataCell className=' border border-2'>Aspek K3L</CTableDataCell>
            <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                  </CFormSelect></CCol></CTableDataCell>
            </CTableRow>
           <CTableRow>
            <CTableDataCell className=' border border-2' rowSpan={2}>Strategy & breaktrough</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableDataCell className=' border border-2'>Kontribusi terhadap KPI di Kontrak</CTableDataCell>
            <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                  </CFormSelect></CCol></CTableDataCell>
            </CTableRow>

          <CTableRow>
           <CTableDataCell className=' border border-2 text-center'rowSpan={4}>3</CTableDataCell>
           <CTableDataCell className=' border border-2' rowSpan={4}>Personal Endurance</CTableDataCell>
          </CTableRow>
           <CTableRow>
            <CTableDataCell className=' border border-2' rowSpan={3}>Tingkat Kesiapan Pribadi</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableDataCell className=' border border-2'>Internal Readiness (Personal Readiness)</CTableDataCell>
            <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                  </CFormSelect></CCol></CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableDataCell className=' border border-2'>Eksternal Readiness</CTableDataCell>
            <CTableDataCell className=' border border-2'>
                <CCol><CFormSelect id="penguji1" placeholder="Penguji 1">
                {angka.map((item)=>{
                  return(
                   <option value={item}>{item}</option>)
                })}
                  </CFormSelect></CCol></CTableDataCell>
            </CTableRow>

         </CTableBody>
         </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default nilaiFP
