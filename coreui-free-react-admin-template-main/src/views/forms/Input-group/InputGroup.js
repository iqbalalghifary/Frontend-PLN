import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as api from '../../../api'
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
} from '@coreui/react'
//import SearchField from 'react-search-field';
import { DocsCallout, DocsExample } from 'src/components'

const select = () => {
  
  // const url = 'https://f7cf-114-124-131-79.ap.ngrok.io/api/pesertas?populate[pegawai][fields][0]=nama&populate[pegawai][fields][1]=nip&populate[pegawai][populate][0]=jabatan&populate[pegawai][populate][1]=grade&populate[pegawai][filters][nip][$eq]=${nip}'
  const [peserta, setPeserta] = useState({})
  const [nip, setNIP] = useState(document.getElementById("nip").value)
  // const readPeserta = () => axios.get(url)

  // const submitHandler = (e) => {
  //   const data = new FormData(e.target);
  //   console.log("data", data.values());
  //   console.log(e.target.values, "hi");
  //   e.preventDefault();
  // };  
  
  useEffect(() => {
    axios.get('https://f7cf-114-124-131-79.ap.ngrok.io/api/pesertas?populate[pegawai][fields][0]=nama&populate[pegawai][fields][1]=nip&populate[pegawai][populate][0]=jabatan&populate[pegawai][populate][1]=grade&populate[pegawai][filters][nip][$eq]=${nip}')
    .then(res => {
      setPeserta(res.data)
    })
  }, []);

  // const arr = [{nip:'201511001', nama:'ali', jabatan:'a', grade:'1'},
  //             {nip:'201511002', nama:'budi', jabatan:'b', grade:'2'},
  //             {nip:'201511003', nama:'cecep', jabatan:'a', grade:'3'}]
  
  function dataPeserta() { 
    const idx = peserta.findIndex(object => {
      return nip === document.getElementById("nip").value})
    document.getElementById("nama").value = peserta[idx].nama
    document.getElementById("jabatan").value = peserta[idx].jabatan
    document.getElementById("grade").value = peserta[idx].grade
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pendaftaran/Updating</strong> <small>Peserta Fit Proper</small>
          </CCardHeader>
          <CCardBody>
          <p id="demo"></p>
          <CForm
                // onSubmit={submitHandler}
                // method="post"
                // encType="multipart/form-data"
                // className="form-horizontal"
              >
            <CFormLabel htmlFor="basic-url">NIP</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput id="nip" placeholder="NIP" aria-label="NIP" aria-describedby="cek" 
                value={nip}
                onChange={(e) => {
                  setNIP(e.target.value);
                  console.log(nip)
                }}/>
              <CButton type="submit" color="warning" variant="outline" id="cek" onClick={() => dataPeserta()}>
                CEK
              </CButton>
            </CInputGroup>
            </CForm>
            <CFormLabel htmlFor="basic-url">Nama</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput id="nama" placeholder="Nama" aria-label="Nama" aria-describedby="button-addon2" disabled/>
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Jabatan</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput id="jabatan" placeholder="Jabatan" aria-label="Jabatan" aria-describedby="button-addon2" disabled/>
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Grade</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput id="grade" placeholder="Grade" aria-label="Grade" aria-describedby="button-addon2" disabled/>
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Date</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="date"
                placeholder="Date"
                aria-label="Date"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Proyeksi</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Jabatan Proyeksi"
                aria-label="Jabatan Proyeksi"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Jenjang Jabatan</CFormLabel>
            <CInputGroup className="mb-3">
              <CDropdown variant="input-group">
                <CDropdownToggle color="secondary" variant="outline">
                  Pilih...
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Jenis Fit & Proper</CFormLabel>
            <CInputGroup className="mb-3">
              <CDropdown variant="input-group">
                <CDropdownToggle color="secondary" variant="outline">
                  Pilih...
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Reguler</CDropdownItem>
                  <CDropdownItem href="#">Vicon</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Pilih Urjab</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Uraian Jabatan"
                aria-label="Uraian Jabatan"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Upload PPT *.ppt/.pptx</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput type="file" id="inputGroupFile01" />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Upload CV *.doc/.docx</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput type="file" id="inputGroupFile02" />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Pewawancara 1</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Pewawancara 1"
                aria-label="Pewawancara 1"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Pewawancara 2</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Pewawancara 2"
                aria-label="Pewawancara 2"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Pewawancara 3</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Pewawancara 3"
                aria-label="Pewawancara 3"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Pewawancara 4</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Pewawancara 4"
                aria-label="Pewawancara 4"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Pewawancara 5</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Pewawancara 5"
                aria-label="Pewawancara 5"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Pewawancara 6</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Pewawancara 6"
                aria-label="Pewawancara 6"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Pewawancara 7</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Pewawancara 7"
                aria-label="Pewawancara 7"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Pewawancara 8</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Pewawancara 8"
                aria-label="Pewawancara 8"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Pewawancara 9</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Pewawancara 9"
                aria-label="Pewawancara 9"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="basic-url">Pewawancara 10</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Pewawancara 10"
                aria-label="Pewawancara 10"
                aria-describedby="button-addon2"
              />
            </CInputGroup>
            <CInputGroup className="mb-3">
              <CButton type="button" color="primary" variant="" id="button-addon2">
                SAVE
              </CButton>
              <CButton type="button" color="secondary" variant="" id="button-addon2">
                BATAL
              </CButton>
            </CInputGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default select
