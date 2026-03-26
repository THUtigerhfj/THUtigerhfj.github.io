document.addEventListener('DOMContentLoaded', () => {
    
    // Modal Logic
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const clickableItems = document.querySelectorAll('.clickable-item');
    
    // Modal content elements
    const modalTitle = document.getElementById('modal-title');
    const modalTag = document.getElementById('modal-tag');
    const modalBody = document.getElementById('modal-body');
    const modalLink = document.getElementById('modal-link');

    // Function to populate and open modal
    const openModalWithData = (dataId) => {
        const data = modalData[dataId]; // modalData is defined in index.html

        if(data) {
            modalTitle.textContent = data.title;
            modalTag.textContent = data.tag;
            modalBody.innerHTML = data.body;
            
            if (data.link) {
                modalLink.href = data.link;
                modalLink.textContent = data.linkText || "View on GitHub";
                modalLink.classList.remove('hidden');
            } else {
                modalLink.classList.add('hidden');
            }

            modal.classList.add('show');
        }
    };

    // Open Modal from project cards
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            openModalWithData(projectId);
        });
    });

    // Open Modal from other clickable items (e.g., medals, hobbies)
    clickableItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.getAttribute('data-item');
            openModalWithData(itemId);
        });
    });

    // Close Modal
    const closeModal = () => {
        modal.classList.remove('show');
    };

    closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

});