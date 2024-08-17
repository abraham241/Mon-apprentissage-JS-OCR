// const url = "http://172.16.10.253:8043/api/item/getservices";
// const response = fetch(url, {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

async function getAllExamens() {
    const url = "http://172.16.10.253:8043/api/item/getservices";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'ApiKey': 'zPtOlCjMcir3oD0d',
                "Content-Type": "application/json",
            },
        });

        // Vérifie si la réponse est correcte
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        const data = await response.json(); // Transforme le corps de la réponse en JSON
        const filteredExamens = data.Data.filter(exam => 
            exam.Oid !== 0 && exam.Label !== "" && exam.Price > 0 && exam.Family == null && exam.Status === 0
        );

        // Sélectionne le conteneur des examens
        const examensContainer = document.getElementById('examens-container');
        
        // Vide le conteneur avant d'ajouter de nouveaux examens
        examensContainer.innerHTML = '';

        // Parcourt les examens filtrés et les ajoute au conteneur
        filteredExamens.forEach(exam => {
            const examElement = document.createElement('div');
            examElement.className = 'exam';
            examElement.innerHTML = `
                <h2>${exam.Label}</h2>
                <p>Prix : ${exam.Price} €</p>
            `;
            examensContainer.appendChild(examElement);
        });
    } catch (error) {
        console.error(`Erreur lors de la récupération des examens : ${error}`);
        const examensContainer = document.getElementById('examens-container');
        examensContainer.innerHTML = `<p class="error">Erreur lors de la récupération des examens : ${error.message}</p>`;
    }
}

getAllExamens();

  