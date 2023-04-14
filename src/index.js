const container = document.querySelector('.cards');
const gridContainer = document.querySelector('.grid');

const createGrid = () => {
  for (let i = 0; i < 40; i += 1) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    gridContainer.appendChild(div);
  }
};

createGrid();

const cards = [
  {
    logo: 'helpjuice',
    name: 'Helpjuice',
    description:
      'The top-rated and award-winning knowledge management software solution, sets the standard for creating external or internal knowledge bases.',
  },
  {
    logo: 'zendesk',
    name: 'Zendesk',
    description:
      'Zendesk features include ticket management, automation, knowledge base, customer portal, analytics, multichannel support, integrations, and mobile apps.',
  },
  {
    logo: 'confluence',
    name: 'Confluence',
    description:
      'Confluence features include team collaboration, document management, knowledge sharing, project planning, task tracking, integration, and mobile apps.',
  },
  {
    logo: 'helpjuice',
    name: 'Hubspot',
    description:
      'HubSpot provides a suite of tools for businesses, including marketing, sales, customer service, analytics, and integrations.',
  },
  {
    logo: 'liveagent',
    name: 'LiveAgent',
    description:
      'LiveAgent offers a range of tools to help businesses manage customer inquiries, support tickets, and service requests across multiple channels.',
  },
];

cards.forEach((card) => {
  const divElement = document.createElement('div');
  divElement.classList.add('container');
  divElement.innerHTML = `    <div class="platName">
  <div class="card-header">
    <img
      src="./Assets/${card.logo}.png"
      alt="icon"
      class="plat-logo"
    />
    <span>${card.name}</span>
  </div>
  <div class="plat-desc">
    <h2>${card.name}</h2>
    <p>
    ${card.description}
    </p>
    <div>
      <span>Learn More</span
      ><img src="./Assets/more.png" alt="more" />
    </div>
  </div>
</div>`;
  container.appendChild(divElement);
});
