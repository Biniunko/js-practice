var storage={
	"car":{
		"inside":{
			"glove box":"maps",
			"passenger seat":"crumbs"
		},
		"outside":{
			"trunk":"jack"
		}
	}
}
var glovebox= storage.car.inside["glove box"]
console.log(glovebox)