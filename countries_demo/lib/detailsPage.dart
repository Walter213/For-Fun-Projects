import 'package:flutter/material.dart';
import 'UserService.dart';

class DetailsPage extends StatelessWidget {
  final User user;

  const DetailsPage({super.key, required this.user});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.black,
          title: Text("User Details"),
        ),
        body: Center(
            child: Column(children: [
          const SizedBox(
            height: 30,
          ),
          Text("Full Name: ${user.name.first} ${user.name.last}"),
          const SizedBox(
            height: 15,
          ),
          Text("Country: ${user.country}"),
          const SizedBox(
            height: 15,
          ),
          Text("Email: ${user.email}")
        ])));
  }
}