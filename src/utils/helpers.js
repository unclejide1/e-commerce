export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat('en-NG',{
   style:'currency',
   currency: 'NGN'
  }).format(number/100)
  return newNumber
}

export const getUniqueValues = () => {}
