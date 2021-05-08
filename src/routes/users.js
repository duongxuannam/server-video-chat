import { Router } from 'express';
import User from 'models/user';
// import * as userController from '../controllers/userController';
// import * as authController from '../controllers/authController';
// import * as mwUser from '../controllers/mwValidation/mwUser';

const routes = Router();

routes.get('/', async (req, res) => {
    try {
        const userInstance = new User({
            username:'HIhi', fullName: 'Xuan Nam',
            name:"name",
            password:'pass'
     });
        const user = await userInstance.save();
        console.log('user ', user);
        res.json(user);
    } catch (e) {
        console.log('loi j moi dc ', e);
        res.send('errr', e);
    }
    // res.json(user);
  });

// Update information user
// routes.put('/', authController.authenticateUser, userController.updateUserProfileByUser);

// routes.put('/verify-phone', authController.authenticateUser, userController.verifyUserPhone);

// // Create deeplink invite friend
// routes.get('/invite-link', authController.authenticateUser, userController.createInviteLink);
// // Add point user invite friend
// routes.put('/add-point', authController.authenticateUser, userController.addPoint);
// // Get members rank

// routes.get('/members-rank', userController.getMembersRank);
// // routes.put('/change-password')
// // admin change password
// routes.put('/:id/password',
//     authController.authenticateAdmin,
//     mwUser.validChangePasswordByAdmin,
//     userController.changePasswordByAdmin);
// // Get users by admin
// routes.get('/', authController.authenticateReceptionist, userController.getUsers);

// // Get user info account
// routes.get('/me', authController.authenticateUser, userController.getUser);
// // Change user password
// routes.put('/me/change-password', authController.authenticateUser, userController.changePassword);
// // Update user account
// routes.put('/me', authController.authenticateUser, userController.updateAccount);


export default routes;