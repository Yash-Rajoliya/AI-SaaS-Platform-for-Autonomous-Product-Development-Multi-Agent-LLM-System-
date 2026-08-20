from ai_platform_sdk.execution import ExecutionAPI


class DummyClient:
    def post(self, *_args, **_kwargs):
        return {"id": "exec-1"}


def test_execution_create():
    api = ExecutionAPI(
        DummyClient()
    )

    result = api.create(
        {"prompt": "test"}
    )

    assert result["id"] == "exec-1"