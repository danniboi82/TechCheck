import express from "express";
import purchases from "../controllers/purchasesController"
import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
const router = express.Router();


router.post("/", purchases.findId);
 router.post("/create", purchases.create);
 router.post("/email", purchases.email);
// router.post("/change", users.forgot);
// router.put("/recover/:token",users.recovery)
// router.post("/", users.create);
// router.post("/signIn", users.signIn);

// router.put("/update/info",users.updateInfo)
// router.put("/verification/:id?",users.verification)
// router.delete("/:id", users.remove);
// router.post("/signOut",users.signOut);
// router.post('/auth',users.authUser)

// Export routes for server.js to use.
export default router;
