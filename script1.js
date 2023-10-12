    // Get the file input element
    const fileInput = document.getElementById('file-input');
   
    // Get the file list element
    const fileList = document.getElementById('file-list');
    function resetFile() {
      
        document.getElementById("file-list").innerHTML = "";
        document.getElementById("lbttot").innerHTML = "";
    }

    // Add event listener for form submission
    document.getElementById('upload-form').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission

      // Get selected files
      const files = fileInput.files;

      // Process each selected file
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.target = '_blank';
        link.textContent = file.name;
        const icon = document.createElement('img');
        icon.src = 'pdf-icon.png'; // Replace with your PDF icon path
        listItem.classList.add('file-list-item');
        listItem.appendChild(icon);
        listItem.appendChild(link);
        fileList.appendChild(listItem);
      }

      fileInput.value = ''; // Clear the file input value
    });
    function submitMarks() {
        const fileList = document.getElementById('file-list').innerText;
        if (fileList != '') {


            // Get the selected marks value
            var marks = document.getElementById("marks").value;
            var lblval = document.getElementById("lbttot").innerText;

            if (lblval != '') {
                document.getElementById("lbttot").innerHTML = (parseInt(marks) + parseInt(lblval));
            }
            else
                document.getElementById("lbttot").innerHTML = marks;
            // Perform actions with the selected marks (e.g., send to a server)

            // You can add further logic here, such as displaying a success message or redirecting to another page
        }
        else
            alert('Please upload a file to find total marks.');
    }