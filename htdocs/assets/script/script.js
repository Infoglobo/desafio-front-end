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
        
            // Dividir a main section em três partes
            const part1 = mainSectionData.slice(0, 2);  // Primeiros 2 resultados
            const part2 = mainSectionData.slice(2, 4);  // Próximos 2 resultados
            const part3 = mainSectionData.slice(4, 8);  // Próximos 4 resultados
        
            // Função para criar os elementos HTML
            const createItemElement = (item, number) => {
                const itemDiv = document.createElement('div');
                const infoDiv = document.createElement('div');
                const imgDiv  = document.createElement('div');
                const titleElement = document.createElement('h2');
                const descriptionElement = document.createElement('p');
                const labelElement = document.createElement('p');
                const imageElement = document.createElement('img');
            
                // Preencher os elementos HTML com os dados do item
                titleElement.innerHTML = item.title;
                descriptionElement.textContent = item.description;
                imageElement.src = '/assets/media/' + item.image;
                labelElement.textContent = item.label;
            
                // Adicionar os elementos ao HTML
                infoDiv.appendChild(labelElement);
                infoDiv.appendChild(titleElement);
                infoDiv.appendChild(descriptionElement);
                
                // Adicionar o ID "info" à infoDiv
                infoDiv.id = `info${number}`;
            
                imgDiv.appendChild(imageElement);

                // Adicionar o ID "img-container" à imgDiv
                imgDiv.id = `img-container${number}`;

                // Ordem das divs imgDiv e infoDiv
                itemDiv.appendChild(imgDiv);
                itemDiv.appendChild(infoDiv);
                
                // Adicionar o ID "post" ao itemDiv
                itemDiv.id = "post";
            
                return itemDiv;
            };
        
            // Criar as <div>s para cada parte
            const part1Container = document.createElement('div');
            const part2Container = document.createElement('div');
            const part3Container = document.createElement('div');
        
            // Adicionar as classes CSS para cada <div>
            part1Container.classList.add('part1');
            part2Container.classList.add('part2');
            part3Container.classList.add('part3');
        
            // Adicionar as partes aos seus respectivos contêineres
            part1.forEach(item => {
                const itemDiv = createItemElement(item, 1);
                const shareLink = document.createElement('a');
                shareLink.href = item.url;
                const shareElement = document.createElement('img');
                shareElement.src = '/assets/media/share-icon-white.png';
                shareLink.appendChild(shareElement);
                itemDiv.appendChild(shareLink);
                part1Container.appendChild(itemDiv);
            });
        
            part2.forEach(item => {
                const itemDiv = createItemElement(item, 2);
                part2Container.appendChild(itemDiv);
            });
        
            part3.forEach(item => {
                const itemDiv = createItemElement(item, 3);
                part3Container.appendChild(itemDiv);
            });
        
            // Adicionar os contêineres ao contêiner principal
            mainSectionContainer.appendChild(part1Container);
            mainSectionContainer.appendChild(part2Container);
            mainSectionContainer.appendChild(part3Container);

          } else if (section.name === "Brasil") {
            const brasilSectionData = section.data.slice(0, 4);
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
                itemDiv.appendChild(imageElement);
                itemDiv.appendChild(labelElement);
                itemDiv.appendChild(titleElement);
                itemDiv.appendChild(descriptionElement);
                brasilSectionContainer.appendChild(itemDiv);
              });
          } else if (section.name === "Mundo") {
            const mundoSectionData = section.data.slice(0, 4);
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
                itemDiv.appendChild(imageElement);
                itemDiv.appendChild(labelElement);
                itemDiv.appendChild(titleElement);
                itemDiv.appendChild(descriptionElement);
                mundoSectionContainer.appendChild(itemDiv);
              });
          }
      });
        
    }
};
request.send();
