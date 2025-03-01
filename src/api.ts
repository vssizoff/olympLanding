const SERVER = "https://176.123.165.201:8001";

export async function reg(name: string, letter: string) {
    await fetch(`${SERVER}/reg`, {
        method: "POST",
        body: JSON.stringify({name, letter})
    });
}