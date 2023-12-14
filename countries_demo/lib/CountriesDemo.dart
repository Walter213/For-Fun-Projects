import 'package:http/http.dart' as http;
import 'dart:convert';

class CountriesInformation {
  final String country;
  final String capital;
  final String currency;

  const CountriesInformation({
    required this.country,
    required this.capital,
    required this.currency
  });

  factory CountriesInformation.fromJson(Map<String, dynamic> json) {
    return CountriesInformation(
      country: json['Nation']['official'],
      capital: json['capital'],
      currency: json['currencies']['BBD']['name']
    );
  }

}

class CountriesDemo {
  Future<List<CountriesInformation>> getCountries() async {
    final response = await http.get(Uri.parse("https://datausa.io/api/data?drilldowns=Nation&measures=Population"));

    if (response.statusCode == 200) 
    {
      final data = jsonDecode(response.body);

      final List<CountriesInformation> countrylist = [];

      for (var a = 0; a < data['data'].length; a++) {
        final entry = data['data'][a];
        countrylist.add(CountriesInformation.fromJson(entry));
      }

      return countrylist;
    }
    else 
    {
      throw Exception('HTTP Failed');
    }
  }
}