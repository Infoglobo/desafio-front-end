'use strict'

// Requisição para o data.json
const request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET', 'data.json', true);
request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log(data.section);
        data.section.forEach(section => {
          if (section.name === "main") {
              const mainSectionData = section.data;
              const mainSectionContainer = document.getElementById('main-section');

              mainSectionData.forEach(item => {
                  // Criar elementos HTML para exibir as informações do item
                  const itemDiv = document.createElement('div');
                  const titleElement = document.createElement('h2');
                  const descriptionElement = document.createElement('p');
                  const imageElement = document.createElement('img');
                  const labelElement = document.createElement('p');

                  // Preencher os elementos HTML com os dados do item
                  titleElement.innerHTML = `<a href="${item.url}">${item.title}</a>`;
                  descriptionElement.textContent = item.description;
                  imageElement.src = '/assets/media/' + item.image;
                  labelElement.textContent = item.label;

                  // Adicionar os elementos ao HTML
                  itemDiv.appendChild(labelElement);
                  itemDiv.appendChild(titleElement);
                  itemDiv.appendChild(descriptionElement);
                  itemDiv.appendChild(imageElement);
                  mainSectionContainer.appendChild(itemDiv);
              });
          } else if (section.name === "Brasil") {
            const brasilSectionData = section.data;
            const brasilSectionContainer = document.getElementById('brasil-section');

            brasilSectionData.forEach(item => {
                // Criar elementos HTML para exibir as informações do item
                const itemDiv = document.createElement('div');
                const titleElement = document.createElement('h2');
                const descriptionElement = document.createElement('p');
                const imageElement = document.createElement('img');
                const labelElement = document.createElement('p');

                // Preencher os elementos HTML com os dados do item
                titleElement.innerHTML = `<a href="${item.url}">${item.title}</a>`;
                descriptionElement.textContent = item.description;
                imageElement.src = '/assets/media/' + item.image;
                labelElement.textContent = item.label;

                // Adicionar os elementos ao HTML
                itemDiv.appendChild(labelElement);
                itemDiv.appendChild(titleElement);
                itemDiv.appendChild(descriptionElement);
                itemDiv.appendChild(imageElement);
                brasilSectionContainer.appendChild(itemDiv);
              });
          } else if (section.name === "Mundo") {
            const mundoSectionData = section.data;
            const mundoSectionContainer = document.getElementById('mundo-section');

            mundoSectionData.forEach(item => {
                // Criar elementos HTML para exibir as informações do item
                const itemDiv = document.createElement('div');
                const titleElement = document.createElement('h2');
                const descriptionElement = document.createElement('p');
                const imageElement = document.createElement('img');
                const labelElement = document.createElement('p');

                // Preencher os elementos HTML com os dados do item
                titleElement.innerHTML = `<a href="${item.url}">${item.title}</a>`;
                descriptionElement.textContent = item.description;
                imageElement.src = '/assets/media/' + item.image;
                labelElement.textContent = item.label;

                // Adicionar os elementos ao HTML
                itemDiv.appendChild(labelElement);
                itemDiv.appendChild(titleElement);
                itemDiv.appendChild(descriptionElement);
                itemDiv.appendChild(imageElement);
                mundoSectionContainer.appendChild(itemDiv);
              });
          }
      });
        
    }
};
request.send();