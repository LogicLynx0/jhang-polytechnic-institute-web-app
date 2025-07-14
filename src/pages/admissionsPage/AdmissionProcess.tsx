import React from 'react'
import AdmissionProcessSteps from './AdmissionProcessSteps'
import RequiredDocuments from './RequiredDocuments'
import ContactInformation from './ContactInformation'

const AdmissionProcess = () => {
  return (
    <div>
        <AdmissionProcessSteps />
        <RequiredDocuments />
        <ContactInformation />
    </div>
  )
}

export default AdmissionProcess