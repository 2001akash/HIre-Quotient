document.addEventListener('DOMContentLoaded', function () {
    let usersData = []; // To store the fetched user data

    // Placeholder API endpoint
    const API_ENDPOINT_URL = 'https://jsonplaceholder.typicode.com/users';

    // Fetch data from the API endpoint
    fetch(API_ENDPOINT_URL)
        .then(response => response.json())
        .then(users => {
            usersData = users;
            renderTable(users);
        });

    function renderTable(users) {
        const appElement = document.getElementById('app');
        const container = document.createElement('div');
        container.classList.add('container');

        const table = document.createElement('table');

        // Render header
        const headerRow = table.insertRow();
        for (const key in users[0]) {
            const th = document.createElement('th');
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
            headerRow.appendChild(th);
        }
        // Add additional cell for actions
        const actionsTh = document.createElement('th');
        actionsTh.textContent = 'Actions';
        headerRow.appendChild(actionsTh);

        // Render rows
        users.forEach((user, index) => {
            const row = table.insertRow();
            for (const key in user) {
                const cell = row.insertCell();
                cell.textContent = user[key];
            }

            // Add action buttons to each row
            const actionsCell = row.insertCell();
            const editButton = createActionButton('Edit', () => editRow(user.id));
            const saveButton = createActionButton('Save', () => saveRow(user.id));
            const deleteButton = createActionButton('Delete', () => deleteRow(user.id));
            actionsCell.classList.add('actions');
            actionsCell.appendChild(editButton);
            actionsCell.appendChild(saveButton);
            actionsCell.appendChild(deleteButton);

            row.addEventListener('click', () => toggleRowSelection(row));
        });

        container.appendChild(table);
        appElement.appendChild(container);
    }

    function createActionButton(text, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        button.classList.add('action-button');
        button.addEventListener('click', onClick);
        return button;
    }

    function toggleRowSelection(row) {
        row.classList.toggle('selected');
    }

    function editRow(userId) {
        // Implement logic to handle editing for the specific user ID
        console.log('Edit user with ID:', userId);
    }

    function saveRow(userId) {
        // Implement logic to handle saving changes for the specific user ID
        console.log('Save changes for user with ID:', userId);
    }

    function deleteRow(userId) {
        // Implement logic to handle deleting for the specific user ID
        console.log('Delete user with ID:', userId);
    }
});
