from ai_platform_sdk.agents import AgentsAPI


class DummyClient:
    def post(self, *_args, **_kwargs):
        return {"status": "started"}


def test_agent_execution():
    api = AgentsAPI(
        DummyClient()
    )

    result = api.execute(
        "planner",
        {"prompt": "test"}
    )

    assert (
        result["status"]
        == "started"
    )