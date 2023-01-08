using System.Text.Json;
using System.Text.Json.Serialization;

 static void Main(string[] args){
    
using (StreamReader r = new StreamReader("data.json"))
{
    string json = r.ReadToEnd();
    source = JsonSerializer.Deserialize<List<Person>>(json);
}
    
List<DataReadyPerson> destination = source.Select(d => new DataReadyPerson{
    CityOfResidence = d.City,
    fname = d.Firstname,
    lname = d.Lastname,
    DataReadPersonId = d.Id
}).ToList();   
    string jsonString = JsonSerializer.Serialize(destination, new JsonSerializerOptions() { WriteIndented = true});
using (StreamWriter outputFile = new StreamWriter("dataReady.json"))
{
     outputFile.WriteLine(jsonString);
}
}