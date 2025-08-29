   // Global array with default values
        let usersArray = [
            { name: "Sahil", age: 20 }];

        console.log("Initial global array:", usersArray);

        // Function to add a new user
        function setitem() {
            let name = prompt("Please enter your name:");
            let age = prompt("Please enter your age:");

            // Save data if name and age are provided
            if (name && age) {
                const user = {
                    name: name,
                    age: parseInt(age)
                };
                usersArray.push(user); // Add the new user to the global array
                console.log("New user added to the global array:", user);

                localStorage.setItem("users", JSON.stringify(usersArray));
                console.log("Global array saved to local storage:", usersArray);

                document.getElementById("outputStatment").innerHTML = `Name "${user.name}" and Age "${user.age}" have been saved to the global array and local storage!`;
            } else {
                console.log("No name or age entered. User data not saved.");
            }
        }

        // Function to get and display user data
        function getitem() {
            // Retrieve data from local storage
            const usersFromStorage = JSON.parse(localStorage.getItem("users"));
            console.log("Data Get from Local storage:", usersFromStorage);

            if (usersFromStorage && usersFromStorage.length > 0) {
                let output = "<h4>Saved users:</h4>";
                usersFromStorage.forEach(user => {
                    // har user output mai add ho ga for each sai += sai concatination 
                    output += `Name - "${user.name}", Age - "${user.age}"<br>`;
                });
                document.getElementById("outputStatment").innerHTML = output;
                console.log("User data displayed in the output:", usersFromStorage);
            } else {
                document.getElementById("outputStatment").innerHTML = "No user data found in local storage.";
                console.log("No user data found in local storage.");
            }
        }

        // Function to remove all user data
        function removeItem() {
            // Remove data from local storage
            localStorage.removeItem("users");
            console.log("All user data removed from local storage.");

            // Clear the global array
            usersArray = [];
            console.log("Global array cleared:", usersArray);

            document.getElementById("outputStatment").innerHTML = "All user data has been <b>removed</b> from the global array and local storage.";
        }

        // Clear the output display
        document.getElementById("clearOutput").addEventListener("click", function () {
            document.getElementById("outputStatment").innerHTML = "";
            console.log("Output display cleared.");
        });

