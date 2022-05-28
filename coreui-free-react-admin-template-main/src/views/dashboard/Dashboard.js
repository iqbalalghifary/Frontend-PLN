import React from 'react'

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
} from '@coreui/icons'


const Dashboard = () => {
  return(
    <CRow>
      <CCard>
        <CCardHeader style={{textAlign:"center"}}>
          <h4>Welcome To Fit and Proper Dahsboard</h4>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol style={{flex:1}}> Pilih Bulan Tahun : </CCol>
            <CCol style={{flex:1}}>
            <CInputGroup className="mb-3">
              <CFormInput
                color="secondary" variant="outline" style={{ width:350}} type="month"
              />
            </CInputGroup>
              </CCol>
              <CCol style={{flex:1}}>
                <CButton>Go</CButton>
              </CCol>
              </CRow>
              <CRow>
              <CIcon icon="cilCalendar" size="xl"/>
              </CRow>
              <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Jadwal Fit Proper</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      No
                    </CTableHeaderCell>
                    <CTableHeaderCell>Nama</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      NIP
                    </CTableHeaderCell>
                    <CTableHeaderCell>Jabatan</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Proyeksi
                    </CTableHeaderCell>
                    <CTableHeaderCell>Tanggal</CTableHeaderCell>
                    <CTableHeaderCell>Penguji</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                {/* <CTableBody> */}
                  {/* {peserta.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={item.avatar.src}
                          status={item.avatar.status}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? "New" : "Recurring"}</span> |
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          size="xl"
                          icon={item.country.flag}
                          title={item.country.name}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">
                              {item.usage.period}
                            </small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={item.usage.color}
                          value={item.usage.value}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">
                          Last login
                        </div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody> */}
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        </CCardBody>
      </CCard>
    </CRow>

  )
}

export default Dashboard
