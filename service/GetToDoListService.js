import FirebaseIntegration from './FirebaseIntegration';

export default class GetToDoListService {
    execute() {
        return new Promise((resolve, reject) => {
            const firebaseIntegration = new FirebaseIntegration((error) => {
                if (error) {
                    reject(error);
                }

                const reference = firebaseIntegration.reference.orderBy("name");
                reference.onSnapshot(querySnapshot => {
                    const toDoLists = [];
                    querySnapshot.forEach((doc) => {
                        toDoLists.push({id: doc.id, ...doc.data()});
                    });
                    resolve(toDoLists);
                });
            });
        });
    }
}
