var totalBrokenImages = 0;

function search_item() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('items');
      
	let hits = 0;
	let punts = 0;

    for (i = 0; i < x.length; i++) { 
         if (!x[i].id.toLowerCase().includes(input)) {
            x[i].style.display="none";
		 punts++;
        }
        else {
            x[i].style.display="block";                 
		hits++;
        }
    }

	let hitp = document.getElementById('hits')
	let puntp = document.getElementById('punts')
	if (hits > 0) {
		hitp.innerHTML = hits.toString();
		puntp.innerHTML = punts.toString();
	}
}

function killImage(e) {
	e.style.display = "none";
	totalBrokenImages++;
	let brokenImageInfo = document.getElementById('brokenImages');
	brokenImageInfo.innerHTML = totalBrokenImages.toString();
	let thisImageDiv = document.getElementById(e.id);
	thisImageDiv.innerHTML = e.id + '<br><span style="color:red;">THIS IMAGE IS BROKEN</span>';
}


