echo "############# npm run build #############"
npm run build

echo "############# deploy to s3 #############"
aws s3 sync ./build s3://woowa-sweetpotato.xyz/

echo "############# invalidate cloudfront #############"
aws cloudfront create-invalidation --distribution-id E39AB0OB2RJ49 --paths "/*"

