interface User {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    avatar: {
      url: string;
      width: string;
      height: string;
    };
  }
  export default User;