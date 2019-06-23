const users = [
    {
        id: 1,
        name: 'User - 1',
    },
    {
        id: 2,
        name: 'User - 2',
    },
    {
        id: 3,
        name: 'User - 3',
    },
];

class UsersService {
    // tslint:disable-next-line:no-empty
    constructor() {}

    public async getUsers(request: any): Promise<any> {
        try {
            return {status: 'Success', data: {users}};
        } catch (error) {
            return error;
        }
    }

    public async getUserId(id: any): Promise<any> {
        try {
            for (const user of users) {
                // tslint:disable-next-line:triple-equals
                if (user.id == id) {
                    return {status: 'Success', data: {user}};
                }
            }

            return {status: 'Failure', statusMessage: 'No user found!'};
        } catch (error) {
            return error;
        }
    }
}

export {UsersService};