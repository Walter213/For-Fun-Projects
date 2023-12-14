import 'package:flutter/material.dart';
import 'UserService.dart';
import 'detailsPage.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late Future<List<User>> futureUsers;

  @override
  void initState() {
    super.initState();
    futureUsers = UserService().getUser();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Users'),
        ),
        body: Center(
          child: FutureBuilder<List<User>>(
            future: futureUsers,
            builder: (context, AsyncSnapshot snapshot) {
              if (snapshot.hasData) {
                return ListView.separated(
                  separatorBuilder: (context, index) => const Divider(
                    color: Colors.black26,
                  ),
                  itemCount: snapshot.data!.length,
                  itemBuilder: (context, index) {
                    User user = snapshot.data?[index];
                    return ListTile(
                      title: Text("${user.name.first} ${user.name.last}"),
                      subtitle: Text(user.email),
                      trailing: const Icon(Icons.chevron_right_outlined),
                      onTap: (() => {openPage(context, user)}),
                    );
                  },
                );
              } else if (snapshot.hasError) {
                return Text('${snapshot.error}');
              }
              // By default, show a loading spinner.
              return const CircularProgressIndicator();
            },
          ),
        ));
  }

  openPage(context, User user) {
    Navigator.push(
        context,
        MaterialPageRoute(
            builder: (context) => DetailsPage(
                  user: user,
                )));
  }
}