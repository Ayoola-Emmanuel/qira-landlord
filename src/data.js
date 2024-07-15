import axios from 'axios'

export const fetchAllStates = async () => {
  try {
    const response = await axios.get(
      'https://nigeria-states-towns-lga.onrender.com/api/states'
    )
    const states = response.data.map(stateObj => ({
      name: stateObj.name,
      code: stateObj.state_code
    }))
    return states
  } catch (error) {
    console.error('Error fetching states:', error)
    return []
  }
}

export const fetchCities = async stateCode => {
  try {
    const response = await axios.get(
      `https://nigeria-states-towns-lga.onrender.com/api/${stateCode}/lgas`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching cities:', error)
    return []
  }
}

export const fetchBankData = async () => {
  try {
    const response = await axios.get('https://api.paystack.co/bank', {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_API_KEY}`
      }
    })

    const bankInfo = response.data.data.map(bankObj => ({
      name: bankObj.name,
      code: bankObj.code
    }))
    return bankInfo
  } catch (error) {
    console.error(error)
  }
}


export const fetchAccountHolderName = async (accountNo, bankCode) => {
  try {
    const response = await axios.get(
      `https://api.paystack.co/bank/resolve?account_number=${accountNo}&bank_code=${bankCode}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_API_KEY}`
        }
      }
    )

    if (response.data.status === true) {
      return response.data.data.account_name
    } else {
      return ''
    }
  } catch (error) {
    console.error('Error fetching account holder name:', error)
    return ''
  }
}
