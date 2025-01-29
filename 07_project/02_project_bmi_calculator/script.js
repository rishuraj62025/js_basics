const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height<0 || height==''|| isNaN(height))
  {
    results.innerHTML = `please provide a valid height ${height}`;
  }
  if(weight<0 || weight ==''|| isNaN(weight))
  {
    results.innerHTML = `please provide a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //results.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.6)
    {
      results.innerHTML = `<span>${bmi}, Under Weight</span>`;
    }
    if(bmi>18.6 && bmi<24.9)
    {
      results.innerHTML = `<span>${bmi}, Normal Range</span>`;
    }
    if(bmi>24.9)
    {
      results.innerHTML = `<span>${bmi}, Over Weight</span>`;
    }
  }
})