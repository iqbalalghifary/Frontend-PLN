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
  const readPendaftar = () => 
  axios.get(
    `${url}/api/pendaftars?populate[peserta][populate]=pegawai`)

  useEffect(() => {
    const fetchData = async () => {
      const result = await readPendaftar();
      const arr = result.data.data;
    console.log(arr)
      setPendaftar(arr);
    };
    fetchData();
  }, []);

  const idx = pendaftar.findIndex(x => 
    x.attributes.peserta.data.attributes.pegawai.data.attributes.nip === document.getElementById("nip").value)
  console.log(idx)
  //const nama = pendaftar[idx].attributes.peserta.data.attributes.pegawai.data.attributes.nama
  console.log(pendaftar[idx].attributes.tangal)
  // console.log(pendaftar.attributes.peserta.data.attributes.pegawai.data.attributes.nama)
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">  
          <CCardHeader>
            <CRow className="mb-3">
                <CCol sm={4}>
                    <CFormInput type="text" id="nama" placeholder="Nama" 
                    //value = {nama} 
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
          <CTable className="text-center border border-2" hover responsive>
         <CTableHead color='light' className=' border border-2 text-center'>
           <CTableRow className=' border border-2'>
             <CTableHeaderCell className=' border border-2'>No</CTableHeaderCell>
             <CTableHeaderCell className=' border border-2'>Tim Penilai</CTableHeaderCell>
             <CTableHeaderCell className=' border border-2' colspan="6">
               key kompetensis 1
               <CRow>
                 <CCol>1</CCol>
                 <CCol>2</CCol>
                 <CCol>3</CCol>
                 <CCol>4</CCol>
                 <CCol>5</CCol>
                 <CCol>6</CCol>
               </CRow>
             </CTableHeaderCell>
             <CTableHeaderCell className=' border border-2' colspan="4">
              key kompetensis 2
               <CRow >
               <CCol>1</CCol>
               <CCol>2</CCol>
               <CCol>3</CCol>
               <CCol>4</CCol>
               </CRow>
            </CTableHeaderCell>
             <CTableHeaderCell className=' border border-2' colspan="4">
               key kompetensis 3
               <CRow className="text-center">
               <CCol>1</CCol>
               <CCol>2</CCol>
               <CCol>3</CCol>
               <CCol>4</CCol>
               </CRow>
            </CTableHeaderCell>
             </CTableRow>
         </CTableHead>
         
         <CTableBody>
         {/* {penguji.map((item,index) => (
                    <CTableRow v-for="item in tableItems">
                     <CTableDataCell className="text-center">
                      <div>{index+1}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.pegawai.data.attributes.nama}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.attributes.pegawai.data.attributes.nip}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.attributes.pegawai.data.attributes.grade.data.attributes.nama_grade}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.pegawai.data.attributes.jenjang.data.attributes.nama_jenjang}</div>
                      </CTableDataCell> */}
                      {/* <CTableDataCell>
                      <Link to={{
                        pathname:`/base/cards/${item.attributes.pegawai.data.attributes.nip}`,
                        state: {nip:item.attributes.pegawai.data.attributes.nip }
                      }}>
                      <CButton color="#ffffff">
                      <CIcon icon={cilPen}></CIcon>
                      </CButton>
                      </Link>
                      <CButton color="#ff0000" onClick={(async ()=>{ await axios.delete(`${url}/api/pengujis/${item.id}`) &fetchData() & alert("delete berhasil")})}>
                      <CIcon icon={cilTrash}></CIcon>
                      </CButton>
                      </CTableDataCell> */}
                    {/* </CTableRow>
                  ))} */}
         </CTableBody>
         </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default nilaiFP
