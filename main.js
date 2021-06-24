var images = 
["https://th.bing.com/th/id/R47af582c7a8b3b28e3a0b5d38133e660?rik=DZwe%2fUMttXsIbA&pid=ImgRaw", "https://th.bing.com/th/id/Ra1abfc2c2cdf3baf934885ece9bc19b8?rik=l0Up7LGmS06qIg&pid=ImgRaw", "https://th.bing.com/th/id/R0b1179900d3802eb6ec802b470cd9bc0?rik=iVHU4nGi7c8BZA&pid=ImgRaw"];
var names = ["Thamizhselvan", "Vidya", "Harshika"];



var i = 0;
function update()
{
i++;
var number_of_family_member_in_array = 3;
if(i > numbers_of_family_member_in_array);
{
 i = 0;
}

var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_member_image"). src = updatedImage;
document.getElementById("family_member_name"). src = updatedName;
}

