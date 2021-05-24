echo "############# npm run build #############"
npm run build

echo "############# deploy to s3 #############"
aws s3 cp --recursive ./build s3://woowa-sweetpotato.xyz/

