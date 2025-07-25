/**
 * Delete Confirmation Modal
 * 
 * This script handles the delete confirmation popup when a user tries to delete a chat.
 * It shows a modal with Yes/No options and only proceeds with deletion if confirmed.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('deleteModal');
    const closeBtn = document.querySelector('.close-modal');
    const cancelBtn = document.getElementById('cancelDelete');
    const confirmBtn = document.getElementById('confirmDelete');
    
    // Store the form that triggered the delete
    let activeDeleteForm = null;
    
    // Find all delete buttons and attach event listeners
    const deleteButtons = document.querySelectorAll('.delete-form button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent the form from submitting immediately
            e.preventDefault();
            
            // Store the parent form
            activeDeleteForm = this.closest('form');
            
            // Get the chat ID for reference (optional)
            const chatId = this.getAttribute('data-id');
            
            // Show the modal with animation
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    });
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking Cancel
    cancelBtn.addEventListener('click', closeModal);
    
    // Handle confirmation (submit the form)
    confirmBtn.addEventListener('click', function() {
        if (activeDeleteForm) {
            activeDeleteForm.submit();
        }
        closeModal();
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Match the transition duration
    }
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});