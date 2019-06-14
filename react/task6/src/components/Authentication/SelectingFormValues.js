// Decorate with redux-form
SelectingFormValuesForm = reduxForm({
    form: 'selectingFormValues' // a unique identifier for this form
  })(SelectingFormValuesForm)
  
  // Decorate with connect to read form values
  const selector = formValueSelector('selectingFormValues') // <-- same as form name вот пример
  SelectingFormValuesForm = connect(state => {
    // can select values individually
    const hasEmailValue = selector(state, 'hasEmail')
    const favoriteColorValue = selector(state, 'favoriteColor')
    // or together as a group
    const { firstName, lastName } = selector(state, 'firstName', 'lastName')
    return {
      hasEmailValue,
      favoriteColorValue,
      fullName: `${firstName || ''} ${lastName || ''}`
    }
  })(SelectingFormValuesForm)
  
  export default SelectingFormValuesForm

  //я хочу выбрать данные с моих инпутов. вот статья блядь я всё сделал как это использваоть