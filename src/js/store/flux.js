const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			statesBySubregion: [],
			subregions: [],
			statesByCountries: [],
			states: [],
			countries: [],
			stateDetails: [],
		},
		actions: {

			getStateBySubregion: async (subregion) => {
				const response = await fetch(`https://restcountries.com/v3.1/subregion/${subregion}`);
				if (!response.ok) return response.status;
				const data = await response.json();
				setStore({ statesBySubregion: data })
				console.log(data)
			},


			getSubregions: async (region) => {
				const response = await fetch(`https://restcountries.com/v3.1/all?fields=subregion,${region}`);
				if (!response.ok) return response.status;
				const data = await response.json();
				const arraySubregions = [...new Set(data.map(item => item.subregion))];
				const filterSubregion = arraySubregions.filter(subregion =>
					getStore().statesByCountries.some(state => state.subregion === subregion)
				);
				setStore({ subregions: filterSubregion });
				console.log(filterSubregion);
			},

			getStateDetails: async (state) => {
				const response = await fetch(`https://restcountries.com/v3.1/name/${state}`)
				if (!response.ok) return response.status
				const data = await response.json()
				setStore({ stateDetails: data })
				console.log(data)
			},

			getStateByCountries: async (country) => {
				const response = await fetch(`https://restcountries.com/v3.1/region/${country}`);
				if (!response.ok) return response.status;
				const data = await response.json();
				setStore({ statesByCountries: data })
				console.log(data)
			},

			getStates: async () => {
				const response = await fetch("https://restcountries.com/v3.1/all");
				if (!response.ok) return response.status
				const data = await response.json()
				setStore({ states: data })
			},

			getCountries: async () => {
				const response = await fetch(`https://restcountries.com/v3.1/all?fields=region`);
				if (!response.ok) return response.status;
				const data = await response.json();
				const arrayRegions = [...new Set(data.map(item => item.region))];
				const objRegions = arrayRegions.map(region => ({ region }));
				setStore({ countries: objRegions });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
