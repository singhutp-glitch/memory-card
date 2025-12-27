export default function CardSpace()
{
    return(<><div className="cardSec">
        
        <div className="card">
            <img className='cardImg' src="#" height='400px' width='400px' />
            {
                // newImage(document.querySelector('img.cardImg'))
            }
        </div>
        
    </div></>)
}

function newImage(img)
{
    const target='';

    let url='https://api.giphy.com/v1/gifs/translate?api_key=76sHFQVOfK3kGZLUONxubMZ4T6t3Mgdg&s='+target;
    
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        img.src = response.data.images.original.url;
        console.log('new');
      }).catch(function(error){
        console.log('error: '+error);
      });
}