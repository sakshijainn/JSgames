//Listen for submit via form

const submit = document.getElementById('loan-form');

// submit.addEventListener('submit', calculateResults);

//delay calculate results

submit.addEventListener('submit', function(e)
{
    //hide results
    document.getElementById('results').style.display = 'none';
   

    //show laoder 
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults,2000);

    e.preventDefault();

});


function calculateResults()
{   console.log('Calculate')
    //grab ui elements 
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayment = parseFloat(years.value)*12;

    //compute Monthly Paymnet
    const x = Math.pow(1+ calculatedInterest , calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly))
    {
       monthlyPayment.value = monthly.toFixed(2);
       totalPayment.value = (monthly)*calculatedPayment.toFixed(2);
       totalInterest.value= ((monthly*calculatedPayment)-principal);

        //hide results
         document.getElementById('results').style.display = 'block';
   

        //show laoder 
         document.getElementById('loading').style.display = 'none';
    }
     else{

        //somehing error
        // console.log("please check your number");
        showError('Please check your numbers');
    }   
    


    function showError(error)
    {
        //hide results
          document.getElementById('results').style.display = 'none';
   

        //show laoder 
         document.getElementById('loading').style.display = 'none';
        //create gif
        const errorGif = document.createElement('div');
        //add class 
        errorGif.className = 'alert alert-danger'

        //create text node and append to div
        errorGif.appendChild(document.createTextNode(error));

        //insert into dom
        //grab elements
        //add card as parent div 
        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');

        //insert error above heading
        card.insertBefore(errorGif,heading);

        //clear erro after 3 sec

        setTimeout(clearError,3000);

    }



    function clearError()
    {
        document.querySelector('.alert').remove();
    }

    //  e.preventDefault();// now remove this from here
}