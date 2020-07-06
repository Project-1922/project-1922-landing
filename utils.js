
async function readSecret(name ) {
    // [START secretmanager_get_secret]
    /**
     * TODO(developer): Uncomment these variables before running the sample.
     */

        // Imports the Secret Manager library
    const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');

    // Instantiates a client
    const client = new SecretManagerServiceClient();

    async function getSecret() {
        const [version] = await client.accessSecretVersion({
            name: name,
        });
        const payload = version.payload.data.toString();

        return payload;
    }

    return getSecret();
    // [END secretmanager_get_secret]
};


module.exports = {readSecret:readSecret};
